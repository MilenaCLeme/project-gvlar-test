import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class ResponseImmobile {
  @Field(() => Int)
  id: number;

  @Field()
  published: boolean;

  @Field()
  type: string;

  @Field()
  about: string;

  @Field({ nullable: true })
  vsell?: string;

  @Field({ nullable: true })
  vboth?: string;

  @Field()
  iptu: string;

  @Field()
  describe: string;

  @Field(() => Int)
  footage: number;

  @Field(() => Int)
  bathroom: number;

  @Field(() => Int)
  vacancy: number;

  @Field()
  address: string;

  @Field()
  number: string;

  @Field({ nullable: true })
  complement?: string;

  @Field()
  postalcode: string;

  @Field()
  district: string;

  @Field()
  state: string;

  @Field(() => User)
  user: User;
}
