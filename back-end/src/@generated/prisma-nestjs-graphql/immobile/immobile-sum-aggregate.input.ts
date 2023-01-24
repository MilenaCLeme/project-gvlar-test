import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImmobileSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    footage?: true;

    @Field(() => Boolean, {nullable:true})
    bathroom?: true;

    @Field(() => Boolean, {nullable:true})
    vacancy?: true;

    @Field(() => Boolean, {nullable:true})
    recordId?: true;
}
