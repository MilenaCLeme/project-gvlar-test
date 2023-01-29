import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ImmobileOnOwnerListRelationFilter } from '../immobile-on-owner/immobile-on-owner-list-relation-filter.input';

@InputType()
export class OwnerWhereInput {

    @Field(() => [OwnerWhereInput], {nullable:true})
    AND?: Array<OwnerWhereInput>;

    @Field(() => [OwnerWhereInput], {nullable:true})
    OR?: Array<OwnerWhereInput>;

    @Field(() => [OwnerWhereInput], {nullable:true})
    NOT?: Array<OwnerWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => ImmobileOnOwnerListRelationFilter, {nullable:true})
    immobiles?: ImmobileOnOwnerListRelationFilter;
}
