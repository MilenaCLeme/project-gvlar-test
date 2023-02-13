import { Module } from '@nestjs/common';
import { PhotographService } from './photograph.service';
import { PhotographResolver } from './photograph.resolver';

@Module({
  providers: [PhotographResolver, PhotographService],
})
export class PhotographModule {}
