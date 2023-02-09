import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Immobile } from 'src/immobile/entities/immobile.entity';

@ObjectType()
export class UserImmobile {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  validation: boolean;

  @Field()
  role: string;

  @Field()
  hashedPassword: string;

  @Field({ nullable: true })
  hashedRefreshToken?: string;

  @Field(() => [Immobile], { nullable: true })
  Immobile?: Immobile[];
}
