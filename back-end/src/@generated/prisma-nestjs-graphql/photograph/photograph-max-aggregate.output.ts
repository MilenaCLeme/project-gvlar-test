import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PhotographMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    describe?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Int, {nullable:true})
    immobileId?: number;
}
