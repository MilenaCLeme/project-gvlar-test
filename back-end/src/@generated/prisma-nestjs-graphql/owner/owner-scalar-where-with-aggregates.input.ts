import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class OwnerScalarWhereWithAggregatesInput {

    @Field(() => [OwnerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<OwnerScalarWhereWithAggregatesInput>;

    @Field(() => [OwnerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<OwnerScalarWhereWithAggregatesInput>;

    @Field(() => [OwnerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<OwnerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: StringWithAggregatesFilter;
}
