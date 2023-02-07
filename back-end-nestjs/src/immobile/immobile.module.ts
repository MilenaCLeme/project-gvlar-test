import { Module } from '@nestjs/common';
import { ImmobileService } from './immobile.service';
import { ImmobileResolver } from './immobile.resolver';

@Module({
  providers: [ImmobileResolver, ImmobileService]
})
export class ImmobileModule {}
