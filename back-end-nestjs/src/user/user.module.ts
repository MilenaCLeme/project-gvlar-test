import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AccessTokenStrategy } from 'src/auth/stragegies/acessToken.strategy';

@Module({
  providers: [
    UserResolver,
    UserService,
    JwtService,
    PrismaService,
    AccessTokenStrategy,
  ],
})
export class UserModule {}
