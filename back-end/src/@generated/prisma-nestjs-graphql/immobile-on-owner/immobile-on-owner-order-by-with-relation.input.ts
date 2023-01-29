import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOrderByWithRelationInput } from '../immobile/immobile-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { OwnerOrderByWithRelationInput } from '../owner/owner-order-by-with-relation.input';

@InputType()
export class ImmobileOnOwnerOrderByWithRelationInput {

    @Field(() => ImmobileOrderByWithRelationInput, {nullable:true})
    immobile?: ImmobileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    immobileId?: keyof typeof SortOrder;

    @Field(() => OwnerOrderByWithRelationInput, {nullable:true})
    owner?: OwnerOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;
}
