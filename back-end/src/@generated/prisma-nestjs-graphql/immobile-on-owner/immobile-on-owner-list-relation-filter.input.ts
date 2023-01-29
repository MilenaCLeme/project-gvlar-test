import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereInput } from './immobile-on-owner-where.input';

@InputType()
export class ImmobileOnOwnerListRelationFilter {

    @Field(() => ImmobileOnOwnerWhereInput, {nullable:true})
    every?: ImmobileOnOwnerWhereInput;

    @Field(() => ImmobileOnOwnerWhereInput, {nullable:true})
    some?: ImmobileOnOwnerWhereInput;

    @Field(() => ImmobileOnOwnerWhereInput, {nullable:true})
    none?: ImmobileOnOwnerWhereInput;
}
