import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class PhotographScalarWhereInput {

    @Field(() => [PhotographScalarWhereInput], {nullable:true})
    AND?: Array<PhotographScalarWhereInput>;

    @Field(() => [PhotographScalarWhereInput], {nullable:true})
    OR?: Array<PhotographScalarWhereInput>;

    @Field(() => [PhotographScalarWhereInput], {nullable:true})
    NOT?: Array<PhotographScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    describe?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    immobileId?: IntNullableFilter;
}
