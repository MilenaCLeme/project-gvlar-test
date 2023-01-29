import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileWhereInput } from './immobile-where.input';
import { Type } from 'class-transformer';
import { ImmobileOrderByWithRelationInput } from './immobile-order-by-with-relation.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImmobileCountAggregateInput } from './immobile-count-aggregate.input';
import { ImmobileAvgAggregateInput } from './immobile-avg-aggregate.input';
import { ImmobileSumAggregateInput } from './immobile-sum-aggregate.input';
import { ImmobileMinAggregateInput } from './immobile-min-aggregate.input';
import { ImmobileMaxAggregateInput } from './immobile-max-aggregate.input';

@ArgsType()
export class ImmobileAggregateArgs {

    @Field(() => ImmobileWhereInput, {nullable:true})
    @Type(() => ImmobileWhereInput)
    where?: ImmobileWhereInput;

    @Field(() => [ImmobileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImmobileOrderByWithRelationInput>;

    @Field(() => ImmobileWhereUniqueInput, {nullable:true})
    cursor?: ImmobileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ImmobileCountAggregateInput, {nullable:true})
    _count?: ImmobileCountAggregateInput;

    @Field(() => ImmobileAvgAggregateInput, {nullable:true})
    _avg?: ImmobileAvgAggregateInput;

    @Field(() => ImmobileSumAggregateInput, {nullable:true})
    _sum?: ImmobileSumAggregateInput;

    @Field(() => ImmobileMinAggregateInput, {nullable:true})
    _min?: ImmobileMinAggregateInput;

    @Field(() => ImmobileMaxAggregateInput, {nullable:true})
    _max?: ImmobileMaxAggregateInput;
}
