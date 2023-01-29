import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereInput } from './immobile-on-owner-where.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerOrderByWithAggregationInput } from './immobile-on-owner-order-by-with-aggregation.input';
import { ImmobileOnOwnerScalarFieldEnum } from './immobile-on-owner-scalar-field.enum';
import { ImmobileOnOwnerScalarWhereWithAggregatesInput } from './immobile-on-owner-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ImmobileOnOwnerCountAggregateInput } from './immobile-on-owner-count-aggregate.input';
import { ImmobileOnOwnerAvgAggregateInput } from './immobile-on-owner-avg-aggregate.input';
import { ImmobileOnOwnerSumAggregateInput } from './immobile-on-owner-sum-aggregate.input';
import { ImmobileOnOwnerMinAggregateInput } from './immobile-on-owner-min-aggregate.input';
import { ImmobileOnOwnerMaxAggregateInput } from './immobile-on-owner-max-aggregate.input';

@ArgsType()
export class ImmobileOnOwnerGroupByArgs {

    @Field(() => ImmobileOnOwnerWhereInput, {nullable:true})
    @Type(() => ImmobileOnOwnerWhereInput)
    where?: ImmobileOnOwnerWhereInput;

    @Field(() => [ImmobileOnOwnerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ImmobileOnOwnerOrderByWithAggregationInput>;

    @Field(() => [ImmobileOnOwnerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ImmobileOnOwnerScalarFieldEnum>;

    @Field(() => ImmobileOnOwnerScalarWhereWithAggregatesInput, {nullable:true})
    having?: ImmobileOnOwnerScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ImmobileOnOwnerCountAggregateInput, {nullable:true})
    _count?: ImmobileOnOwnerCountAggregateInput;

    @Field(() => ImmobileOnOwnerAvgAggregateInput, {nullable:true})
    _avg?: ImmobileOnOwnerAvgAggregateInput;

    @Field(() => ImmobileOnOwnerSumAggregateInput, {nullable:true})
    _sum?: ImmobileOnOwnerSumAggregateInput;

    @Field(() => ImmobileOnOwnerMinAggregateInput, {nullable:true})
    _min?: ImmobileOnOwnerMinAggregateInput;

    @Field(() => ImmobileOnOwnerMaxAggregateInput, {nullable:true})
    _max?: ImmobileOnOwnerMaxAggregateInput;
}
