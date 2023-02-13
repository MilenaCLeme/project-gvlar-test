import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotographService {
  findAll() {
    return `This action returns all photograph`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photograph`;
  }

  remove(id: number) {
    return `This action removes a #${id} photograph`;
  }
}
