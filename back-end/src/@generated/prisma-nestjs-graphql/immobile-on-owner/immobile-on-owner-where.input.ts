import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileRelationFilter } from '../immobile/immobile-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { OwnerRelationFilter } from '../owner/owner-relation-filter.input';

@InputType()
export class ImmobileOnOwnerWhereInput {

    @Field(() => [ImmobileOnOwnerWhereInput], {nullable:true})
    AND?: Array<ImmobileOnOwnerWhereInput>;

    @Field(() => [ImmobileOnOwnerWhereInput], {nullable:true})
    OR?: Array<ImmobileOnOwnerWhereInput>;

    @Field(() => [ImmobileOnOwnerWhereInput], {nullable:true})
    NOT?: Array<ImmobileOnOwnerWhereInput>;

    @Field(() => ImmobileRelationFilter, {nullable:true})
    immobile?: ImmobileRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    immobileId?: IntFilter;

    @Field(() => OwnerRelationFilter, {nullable:true})
    owner?: OwnerRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    ownerId?: IntFilter;
}
