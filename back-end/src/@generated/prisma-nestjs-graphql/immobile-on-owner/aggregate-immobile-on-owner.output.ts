import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImmobileOnOwnerCountAggregate } from './immobile-on-owner-count-aggregate.output';
import { ImmobileOnOwnerAvgAggregate } from './immobile-on-owner-avg-aggregate.output';
import { ImmobileOnOwnerSumAggregate } from './immobile-on-owner-sum-aggregate.output';
import { ImmobileOnOwnerMinAggregate } from './immobile-on-owner-min-aggregate.output';
import { ImmobileOnOwnerMaxAggregate } from './immobile-on-owner-max-aggregate.output';

@ObjectType()
export class AggregateImmobileOnOwner {

    @Field(() => ImmobileOnOwnerCountAggregate, {nullable:true})
    _count?: ImmobileOnOwnerCountAggregate;

    @Field(() => ImmobileOnOwnerAvgAggregate, {nullable:true})
    _avg?: ImmobileOnOwnerAvgAggregate;

    @Field(() => ImmobileOnOwnerSumAggregate, {nullable:true})
    _sum?: ImmobileOnOwnerSumAggregate;

    @Field(() => ImmobileOnOwnerMinAggregate, {nullable:true})
    _min?: ImmobileOnOwnerMinAggregate;

    @Field(() => ImmobileOnOwnerMaxAggregate, {nullable:true})
    _max?: ImmobileOnOwnerMaxAggregate;
}
