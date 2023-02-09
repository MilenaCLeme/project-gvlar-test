import { Module } from '@nestjs/common';
import { ImmobileService } from './immobile.service';
import { ImmobileResolver } from './immobile.resolver';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccessTokenStrategy } from 'src/auth/stragegies/acessToken.strategy';

@Module({
  providers: [
    ImmobileResolver,
    ImmobileService,
    JwtService,
    PrismaService,
    AccessTokenStrategy,
  ],
})
export class ImmobileModule {}
