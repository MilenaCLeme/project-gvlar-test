import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }

  async user(where: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(id: string, params: Prisma.UserUpdateInput): Promise<User> {
    const { name, email, password, phone, validation, role } = params;
    return this.prisma.user.update({
      where: {
        id: parseInt(id),
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

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
