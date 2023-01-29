import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImmobileOnOwnerSumAggregate {

    @Field(() => Int, {nullable:true})
    immobileId?: number;

    @Field(() => Int, {nullable:true})
    ownerId?: number;
}
