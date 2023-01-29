import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImmobileCountAggregate } from './immobile-count-aggregate.output';
import { ImmobileAvgAggregate } from './immobile-avg-aggregate.output';
import { ImmobileSumAggregate } from './immobile-sum-aggregate.output';
import { ImmobileMinAggregate } from './immobile-min-aggregate.output';
import { ImmobileMaxAggregate } from './immobile-max-aggregate.output';

@ObjectType()
export class AggregateImmobile {

    @Field(() => ImmobileCountAggregate, {nullable:true})
    _count?: ImmobileCountAggregate;

    @Field(() => ImmobileAvgAggregate, {nullable:true})
    _avg?: ImmobileAvgAggregate;

    @Field(() => ImmobileSumAggregate, {nullable:true})
    _sum?: ImmobileSumAggregate;

    @Field(() => ImmobileMinAggregate, {nullable:true})
    _min?: ImmobileMinAggregate;

    @Field(() => ImmobileMaxAggregate, {nullable:true})
    _max?: ImmobileMaxAggregate;
}
