import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ImmobileOnOwnerUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    immobileId!: number;

    @Field(() => Int, {nullable:false})
    ownerId!: number;
}
