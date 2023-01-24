import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileWhereInput } from './immobile-where.input';

@InputType()
export class ImmobileRelationFilter {

    @Field(() => ImmobileWhereInput, {nullable:true})
    is?: ImmobileWhereInput;

    @Field(() => ImmobileWhereInput, {nullable:true})
    isNot?: ImmobileWhereInput;
}
