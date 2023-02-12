import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AccesTokenGuard } from './auth/guards/acessToken.guard';
import { UserModule } from './user/user.module';
import { MailModule } from './mail/mail.module';
import { ImmobileModule } from './immobile/immobile.module';
import { OwnerModule } from './owner/owner.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    AuthModule,
    UserModule,
    MailModule,
    ImmobileModule,
    OwnerModule,
  ],
  controllers: [],
  providers: [PrismaService, { provide: APP_GUARD, useClass: AccesTokenGuard }],
})
export class AppModule {}
