import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileWhereInput } from './immobile-where.input';
import { Type } from 'class-transformer';
import { ImmobileOrderByWithAggregationInput } from './immobile-order-by-with-aggregation.input';
import { ImmobileScalarFieldEnum } from './immobile-scalar-field.enum';
import { ImmobileScalarWhereWithAggregatesInput } from './immobile-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ImmobileCountAggregateInput } from './immobile-count-aggregate.input';
import { ImmobileAvgAggregateInput } from './immobile-avg-aggregate.input';
import { ImmobileSumAggregateInput } from './immobile-sum-aggregate.input';
import { ImmobileMinAggregateInput } from './immobile-min-aggregate.input';
import { ImmobileMaxAggregateInput } from './immobile-max-aggregate.input';

@ArgsType()
export class ImmobileGroupByArgs {

    @Field(() => ImmobileWhereInput, {nullable:true})
    @Type(() => ImmobileWhereInput)
    where?: ImmobileWhereInput;

    @Field(() => [ImmobileOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImmobileOrderByWithAggregationInput>;

    @Field(() => [ImmobileScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImmobileScalarFieldEnum>;

    @Field(() => ImmobileScalarWhereWithAggregatesInput, {nullable:true})
    having?: ImmobileScalarWhereWithAggregatesInput;

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
