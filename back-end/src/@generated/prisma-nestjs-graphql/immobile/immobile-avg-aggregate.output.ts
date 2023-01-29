import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ImmobileAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    footage?: number;

    @Field(() => Float, {nullable:true})
    bathroom?: number;

    @Field(() => Float, {nullable:true})
    vacancy?: number;

    @Field(() => Float, {nullable:true})
    recordId?: number;
}
