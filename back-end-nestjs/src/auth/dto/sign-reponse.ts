import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { Immobile } from 'src/immobile/entities/immobile.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class SignResponse {
  @IsNotEmpty()
  @IsString()
  @Field()
  accessToken: string;

  @Field(() => User)
  user: User;

  @Field(() => [Immobile], { nullable: true })
  immobile?: Immobile;
}
