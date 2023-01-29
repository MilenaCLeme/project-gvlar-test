import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OwnerCountAggregate } from './owner-count-aggregate.output';
import { OwnerAvgAggregate } from './owner-avg-aggregate.output';
import { OwnerSumAggregate } from './owner-sum-aggregate.output';
import { OwnerMinAggregate } from './owner-min-aggregate.output';
import { OwnerMaxAggregate } from './owner-max-aggregate.output';

@ObjectType()
export class OwnerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => OwnerCountAggregate, {nullable:true})
    _count?: OwnerCountAggregate;

    @Field(() => OwnerAvgAggregate, {nullable:true})
    _avg?: OwnerAvgAggregate;

    @Field(() => OwnerSumAggregate, {nullable:true})
    _sum?: OwnerSumAggregate;

    @Field(() => OwnerMinAggregate, {nullable:true})
    _min?: OwnerMinAggregate;

    @Field(() => OwnerMaxAggregate, {nullable:true})
    _max?: OwnerMaxAggregate;
}
