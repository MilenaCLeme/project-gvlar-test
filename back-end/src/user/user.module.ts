import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserResolvers } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserResolvers, UserService, PrismaService],
})
export class UserModule {}
