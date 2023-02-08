import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class UpdateRoleInput {
  @Field(() => ID)
  userId: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  role: string;
}
