import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccessTokenStrategy } from './stragegies/acessToken.strategy';
import { MailService } from 'src/mail/mail.service';
import { ImmobileService } from 'src/immobile/immobile.service';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    JwtService,
    PrismaService,
    AccessTokenStrategy,
    MailService,
    ImmobileService,
  ],
})
export class AuthModule {}
