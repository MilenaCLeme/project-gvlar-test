import { Injectable } from '@nestjs/common';
import { CreateImmobileInput } from './dto/create-immobile.input';
import { UpdateImmobileInput } from './dto/update-immobile.input';

@Injectable()
export class ImmobileService {
  create(createImmobileInput: CreateImmobileInput) {
    return 'This action adds a new immobile';
  }

  findAll() {
    return `This action returns all immobile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} immobile`;
  }

  update(id: number, updateImmobileInput: UpdateImmobileInput) {
    return `This action updates a #${id} immobile`;
  }

  remove(id: number) {
    return `This action removes a #${id} immobile`;
  }
}
