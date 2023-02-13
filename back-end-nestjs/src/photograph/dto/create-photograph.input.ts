import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePhotographInput {
  @Field({ nullable: true })
  filename: string;

  @Field({ nullable: true })
  mimetype: string;

  @Field({ nullable: true })
  encoding: string;
}
