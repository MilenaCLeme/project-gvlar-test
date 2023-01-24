import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImmobileMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    published?: true;

    @Field(() => Boolean, {nullable:true})
    type?: true;

    @Field(() => Boolean, {nullable:true})
    about?: true;

    @Field(() => Boolean, {nullable:true})
    vsell?: true;

    @Field(() => Boolean, {nullable:true})
    vboth?: true;

    @Field(() => Boolean, {nullable:true})
    iptu?: true;

    @Field(() => Boolean, {nullable:true})
    describe?: true;

    @Field(() => Boolean, {nullable:true})
    footage?: true;

    @Field(() => Boolean, {nullable:true})
    bathroom?: true;

    @Field(() => Boolean, {nullable:true})
    vacancy?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    number?: true;

    @Field(() => Boolean, {nullable:true})
    complement?: true;

    @Field(() => Boolean, {nullable:true})
    postalcode?: true;

    @Field(() => Boolean, {nullable:true})
    district?: true;

    @Field(() => Boolean, {nullable:true})
    state?: true;

    @Field(() => Boolean, {nullable:true})
    recordId?: true;
}
