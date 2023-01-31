import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class SignUpInput {
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
  @Field()
  @Length(6, 10)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  @Length(10, 11)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  role: string;
}
