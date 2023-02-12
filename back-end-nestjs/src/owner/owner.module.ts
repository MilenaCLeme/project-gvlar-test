import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccessTokenStrategy } from 'src/auth/stragegies/acessToken.strategy';

@Module({
  providers: [
    OwnerResolver,
    OwnerService,
    JwtService,
    PrismaService,
    AccessTokenStrategy,
  ],
})
export class OwnerModule {}
