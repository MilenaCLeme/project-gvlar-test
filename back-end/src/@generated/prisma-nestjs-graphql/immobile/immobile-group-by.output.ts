import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImmobileCountAggregate } from './immobile-count-aggregate.output';
import { ImmobileAvgAggregate } from './immobile-avg-aggregate.output';
import { ImmobileSumAggregate } from './immobile-sum-aggregate.output';
import { ImmobileMinAggregate } from './immobile-min-aggregate.output';
import { ImmobileMaxAggregate } from './immobile-max-aggregate.output';

@ObjectType()
export class ImmobileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Boolean, {nullable:false})
    published!: boolean;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    about!: string;

    @Field(() => String, {nullable:true})
    vsell?: string;

    @Field(() => String, {nullable:true})
    vboth?: string;

    @Field(() => String, {nullable:false})
    iptu!: string;

    @Field(() => String, {nullable:false})
    describe!: string;

    @Field(() => Int, {nullable:false})
    footage!: number;

    @Field(() => Int, {nullable:false})
    bathroom!: number;

    @Field(() => Int, {nullable:false})
    vacancy!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => String, {nullable:true})
    complement?: string;

    @Field(() => String, {nullable:false})
    postalcode!: string;

    @Field(() => String, {nullable:false})
    district!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => Int, {nullable:true})
    recordId?: number;

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
