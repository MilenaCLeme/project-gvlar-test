import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OwnerWhereInput } from './owner-where.input';

@InputType()
export class OwnerRelationFilter {

    @Field(() => OwnerWhereInput, {nullable:true})
    is?: OwnerWhereInput;

    @Field(() => OwnerWhereInput, {nullable:true})
    isNot?: OwnerWhereInput;
}
