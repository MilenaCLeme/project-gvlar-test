import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ImmobileRelationFilter } from '../immobile/immobile-relation-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class PhotographWhereInput {

    @Field(() => [PhotographWhereInput], {nullable:true})
    AND?: Array<PhotographWhereInput>;

    @Field(() => [PhotographWhereInput], {nullable:true})
    OR?: Array<PhotographWhereInput>;

    @Field(() => [PhotographWhereInput], {nullable:true})
    NOT?: Array<PhotographWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    describe?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => ImmobileRelationFilter, {nullable:true})
    immobile?: ImmobileRelationFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    immobileId?: IntNullableFilter;
}
