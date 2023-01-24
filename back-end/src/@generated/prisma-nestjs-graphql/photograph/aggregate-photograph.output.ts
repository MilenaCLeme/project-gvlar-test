import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PhotographCountAggregate } from './photograph-count-aggregate.output';
import { PhotographAvgAggregate } from './photograph-avg-aggregate.output';
import { PhotographSumAggregate } from './photograph-sum-aggregate.output';
import { PhotographMinAggregate } from './photograph-min-aggregate.output';
import { PhotographMaxAggregate } from './photograph-max-aggregate.output';

@ObjectType()
export class AggregatePhotograph {

    @Field(() => PhotographCountAggregate, {nullable:true})
    _count?: PhotographCountAggregate;

    @Field(() => PhotographAvgAggregate, {nullable:true})
    _avg?: PhotographAvgAggregate;

    @Field(() => PhotographSumAggregate, {nullable:true})
    _sum?: PhotographSumAggregate;

    @Field(() => PhotographMinAggregate, {nullable:true})
    _min?: PhotographMinAggregate;

    @Field(() => PhotographMaxAggregate, {nullable:true})
    _max?: PhotographMaxAggregate;
}
