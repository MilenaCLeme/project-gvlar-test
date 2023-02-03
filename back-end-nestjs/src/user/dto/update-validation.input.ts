import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

@ObjectType()
export class UpdateValidation {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  refreshToken: string;

  @IsBoolean()
  @Field()
  validation: boolean;
}
