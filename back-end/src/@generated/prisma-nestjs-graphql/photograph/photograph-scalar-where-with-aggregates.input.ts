import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class PhotographScalarWhereWithAggregatesInput {

    @Field(() => [PhotographScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PhotographScalarWhereWithAggregatesInput>;

    @Field(() => [PhotographScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PhotographScalarWhereWithAggregatesInput>;

    @Field(() => [PhotographScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PhotographScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    describe?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    immobileId?: IntNullableWithAggregatesFilter;
}
