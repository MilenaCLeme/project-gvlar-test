import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(6, 10)
  @Field()
  hashedPassword: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 11)
  @Field()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  validation: boolean;

  @IsNotEmpty()
  @IsString()
  @Field()
  role: string;
}
