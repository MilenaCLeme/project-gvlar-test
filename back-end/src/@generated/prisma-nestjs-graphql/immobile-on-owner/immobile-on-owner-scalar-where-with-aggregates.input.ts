import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ImmobileOnOwnerScalarWhereWithAggregatesInput {

    @Field(() => [ImmobileOnOwnerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ImmobileOnOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [ImmobileOnOwnerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ImmobileOnOwnerScalarWhereWithAggregatesInput>;

    @Field(() => [ImmobileOnOwnerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ImmobileOnOwnerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    immobileId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ownerId?: IntWithAggregatesFilter;
}
