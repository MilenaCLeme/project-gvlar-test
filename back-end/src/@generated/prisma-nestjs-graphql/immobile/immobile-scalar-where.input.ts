import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ImmobileScalarWhereInput {

    @Field(() => [ImmobileScalarWhereInput], {nullable:true})
    AND?: Array<ImmobileScalarWhereInput>;

    @Field(() => [ImmobileScalarWhereInput], {nullable:true})
    OR?: Array<ImmobileScalarWhereInput>;

    @Field(() => [ImmobileScalarWhereInput], {nullable:true})
    NOT?: Array<ImmobileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    about?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    vsell?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    vboth?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    iptu?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    describe?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    footage?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    bathroom?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    vacancy?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    complement?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    postalcode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    district?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    state?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    recordId?: IntNullableFilter;
}
