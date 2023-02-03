import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';
import { UpdateValidationVerify } from './dto/update-validation-verify.input';
import { UpdateValidation } from './dto/update-validation.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async userAll() {
    return await this.prisma.user.findMany();
  }

  async userOne(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async updateValidationPage(updateValidationPage: UpdateValidationVerify) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: updateValidationPage.id,
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
      updateValidationPage.refreshToken,
    );

    if (!doRefreshTokeMatch) {
      throw new ForbiddenException('Access Denied');
    }

    return { validation: true };
  }

  async updateValidation(updateValidation: UpdateValidation) {
    if (!updateValidation.validation) {
      throw new ForbiddenException('Access Denied');
    }

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

    return { validation: true };
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
