import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImmobileMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => String, {nullable:true})
    type?: string;

    @Field(() => String, {nullable:true})
    about?: string;

    @Field(() => String, {nullable:true})
    vsell?: string;

    @Field(() => String, {nullable:true})
    vboth?: string;

    @Field(() => String, {nullable:true})
    iptu?: string;

    @Field(() => String, {nullable:true})
    describe?: string;

    @Field(() => Int, {nullable:true})
    footage?: number;

    @Field(() => Int, {nullable:true})
    bathroom?: number;

    @Field(() => Int, {nullable:true})
    vacancy?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    number?: string;

    @Field(() => String, {nullable:true})
    complement?: string;

    @Field(() => String, {nullable:true})
    postalcode?: string;

    @Field(() => String, {nullable:true})
    district?: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Int, {nullable:true})
    recordId?: number;
}
