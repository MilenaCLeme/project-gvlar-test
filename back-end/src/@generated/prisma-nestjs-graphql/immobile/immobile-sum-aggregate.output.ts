import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImmobileSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    footage?: number;

    @Field(() => Int, {nullable:true})
    bathroom?: number;

    @Field(() => Int, {nullable:true})
    vacancy?: number;

    @Field(() => Int, {nullable:true})
    recordId?: number;
}
