import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';

@Injectable()
export class OwnerService {
  constructor(private prisma: PrismaService) {}
  async createOwner(createOwnerInput: CreateOwnerInput) {
    return await this.prisma.owner.create({
      data: {
        name: createOwnerInput.name,
        email: createOwnerInput.email,
        phone: createOwnerInput.phone,
      },
    });
  }

  async findAllOwner() {
    return await this.prisma.owner.findMany();
  }

  async findOneOwner(idOwner: number) {
    return await this.prisma.owner.findUnique({
      where: {
        id: idOwner,
      },
    });
  }

  async updateOwner(updateOwnerInput: UpdateOwnerInput) {
    return await this.prisma.owner.update({
      where: {
        id: updateOwnerInput.id,
      },
      data: {
        name: updateOwnerInput.name,
        email: updateOwnerInput.email,
        phone: updateOwnerInput.phone,
      },
    });
  }

  async removeOwner(idOwner: number) {
    return await this.prisma.owner.delete({
      where: {
        id: idOwner,
      },
    });
  }
}
