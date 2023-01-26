import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async findOne(
    userWhereUnique: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUnique,
    });
  }

  async createUser({
    password,
    ...result
  }: Prisma.UserCreateInput): Promise<User> {
    const hash = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        password: hash,
        ...result,
      },
    });
  }

  async updateUser(id: number, params: Prisma.UserUpdateInput): Promise<User> {
    const { name, email, password, phone, validation, role } = params;

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(password && { password }),
        ...(phone && { phone }),
        ...(validation && { validation }),
        ...(role && { role }),
      },
    });
  }

  async deleteUser(
    userWhereUnique: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return this.prisma.user.delete({
      where: userWhereUnique,
    });
  }
}
