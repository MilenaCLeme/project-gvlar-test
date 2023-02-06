import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
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

    return { validation: true, user };
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const { email, name, phone, validation, role } = updateUserInput;

    const hashedPassword = updateUserInput.hashedPassword
      ? await argon.hash(updateUserInput.hashedPassword)
      : undefined;

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(validation && { validation }),
        ...(role && { role }),
        ...(hashedPassword && { hashedPassword }),
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
