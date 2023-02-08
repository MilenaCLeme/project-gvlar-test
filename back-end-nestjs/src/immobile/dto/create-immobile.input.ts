import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateImmobileInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  type: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  about: string;

  @IsString()
  @Field({ nullable: true })
  vsell?: string;

  @IsString()
  @Field({ nullable: true })
  vboth?: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  iptu: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  describe: string;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  footage: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  bathroom: number;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  vacancy: number;

  @IsNotEmpty()
  @IsString()
  @Field()
  address: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  number: string;

  @IsString()
  @Field({ nullable: true })
  complement?: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  postalcode: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  district: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  state: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => Int)
  recordId: number;
}
