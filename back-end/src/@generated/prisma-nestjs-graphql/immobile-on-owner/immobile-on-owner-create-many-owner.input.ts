import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ImmobileOnOwnerCreateManyOwnerInput {

    @Field(() => Int, {nullable:false})
    immobileId!: number;
}
