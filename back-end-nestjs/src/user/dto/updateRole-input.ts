import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateRoleInput {
  @Field(() => Int)
  userId: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  role: string;
}
