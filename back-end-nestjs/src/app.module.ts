import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service.js';
import { AuthModule } from './auth/auth.module.js';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AccesTokenGuard } from './auth/guards/acessToken.guard.js';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { ImmobileModule } from './immobile/immobile.module';
import { OwnerModule } from './owner/owner.module';
import { PhotographModule } from './photograph/photograph.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: true,
    }),
    AuthModule,
    UserModule,
    MailModule,
    ImmobileModule,
    OwnerModule,
    PhotographModule,
  ],
  controllers: [],
  providers: [PrismaService, { provide: APP_GUARD, useClass: AccesTokenGuard }],
})
export class AppModule {}
