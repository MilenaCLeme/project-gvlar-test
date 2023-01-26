import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({message: 'invalid characters'})
  name: string;

  @IsEmail()
  @IsNotEmpty({message: 'Invalid E-mail'})
    email: string;

  @IsString()
  @Length(10, 11)
  @IsNotEmpty({message: 'Invalid phone'})
  phone: string;


  password: string;
  role:
}
