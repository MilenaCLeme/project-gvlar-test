import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileWhereInput } from './immobile-where.input';

@InputType()
export class ImmobileListRelationFilter {

    @Field(() => ImmobileWhereInput, {nullable:true})
    every?: ImmobileWhereInput;

    @Field(() => ImmobileWhereInput, {nullable:true})
    some?: ImmobileWhereInput;

    @Field(() => ImmobileWhereInput, {nullable:true})
    none?: ImmobileWhereInput;
}
