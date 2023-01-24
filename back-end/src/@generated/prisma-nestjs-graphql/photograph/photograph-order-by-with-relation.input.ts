import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImmobileOrderByWithRelationInput } from '../immobile/immobile-order-by-with-relation.input';

@InputType()
export class PhotographOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    describe?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => ImmobileOrderByWithRelationInput, {nullable:true})
    immobile?: ImmobileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    immobileId?: keyof typeof SortOrder;
}
