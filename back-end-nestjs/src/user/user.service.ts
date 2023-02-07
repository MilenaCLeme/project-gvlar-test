import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRoleInput } from './dto/updateRole-input';
import { UpdateUserInput } from './dto/updateUser-input';
import { UpdateValidation } from './dto/updateValidation-input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async userAll() {
    return await this.prisma.user.findMany();
  }

  async userOneEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async userOneId(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async updateValidation(updateValidation: UpdateValidation) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: updateValidation.id,
      },
    });

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    if (user.validation) {
      throw new ForbiddenException('Access Denied');
    }

    const doRefreshTokeMatch = await argon.verify(
      user.hashedRefreshToken,
      updateValidation.refreshToken,
    );

    if (!doRefreshTokeMatch) {
      throw new ForbiddenException('Access Denied');
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        validation: true,
      },
    });

    return { success: true, user };
  }

  async updateRole(id: number, updateRoleInput: UpdateRoleInput) {
    const userFrist = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userFrist) {
      throw new ForbiddenException('Access Denied');
    }

    if (userFrist.role === 'client') {
      throw new ForbiddenException('Access Denied');
    }

    const userSecond = await this.prisma.user.update({
      where: {
        id: updateRoleInput.userId,
      },
      data: {
        role: updateRoleInput.role,
      },
    });

    return { success: true, user: userSecond };
  }

  async updateUser(id: number, updateUserInput: UpdateUserInput) {
    const { email, name, phone, role } = updateUserInput;

    const hashedPassword = updateUserInput.hashedPassword
      ? await argon.hash(updateUserInput.hashedPassword)
      : undefined;

    return await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(hashedPassword && { hashedPassword }),
        ...(role && { role }),
      },
    });
  }

  async removeUser(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
