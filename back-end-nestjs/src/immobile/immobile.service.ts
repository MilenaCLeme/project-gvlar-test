import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImmobileInput } from './dto/create-immobile.input';
import { UpdateImmobileInput } from './dto/update-immobile.input';

@Injectable()
export class ImmobileService {
  constructor(private prisma: PrismaService) {}
  async createImmobile(
    userId: number,
    createImmobileInput: CreateImmobileInput,
  ) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    const immobile = await this.prisma.immobile.create({
      data: {
        about: createImmobileInput.about,
        address: createImmobileInput.address,
        bathroom: createImmobileInput.bathroom,
        describe: createImmobileInput.describe,
        district: createImmobileInput.district,
        footage: createImmobileInput.footage,
        iptu: createImmobileInput.iptu,
        number: createImmobileInput.number,
        postalcode: createImmobileInput.postalcode,
        state: createImmobileInput.state,
        type: createImmobileInput.type,
        vacancy: createImmobileInput.vacancy,
        complement: createImmobileInput.complement,
        vboth: createImmobileInput.vboth,
        vsell: createImmobileInput.vsell,
        bed: createImmobileInput.bed,
        recordId: userId,
      },
    });

    return { ...immobile, user: user };
  }

  async findAllImmobile() {
    return await this.prisma.immobile.findMany();
  }

  async findManyImmobileUser(userId: number) {
    const immobile = await this.prisma.immobile.findMany({
      where: {
        recordId: userId,
      },
    });

    if (!immobile) {
      return [];
    }

    return immobile;
  }

  async updateImmobile(updateImmobileInput: UpdateImmobileInput) {
    const {
      about,
      address,
      bathroom,
      complement,
      describe,
      district,
      footage,
      iptu,
      number,
      postalcode,
      state,
      type,
      vacancy,
      vboth,
      vsell,
      id,
    } = updateImmobileInput;

    return await this.prisma.immobile.update({
      where: {
        id,
      },
      data: {
        ...(about && { about }),
        ...(address && { address }),
        ...(bathroom && { bathroom }),
        ...(complement && { complement }),
        ...(describe && { describe }),
        ...(district && { district }),
        ...(footage && { footage }),
        ...(iptu && { iptu }),
        ...(number && { number }),
        ...(postalcode && { postalcode }),
        ...(state && { state }),
        ...(type && { type }),
        ...(vacancy && { vacancy }),
        ...(vboth && { vboth }),
        ...(vsell && { vsell }),
      },
    });
  }

  async removeImmobile(id: number) {
    return await this.prisma.immobile.delete({
      where: {
        id,
      },
    });
  }
}
