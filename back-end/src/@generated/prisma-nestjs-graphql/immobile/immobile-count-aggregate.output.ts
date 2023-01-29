import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImmobileCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    published!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    about!: number;

    @Field(() => Int, {nullable:false})
    vsell!: number;

    @Field(() => Int, {nullable:false})
    vboth!: number;

    @Field(() => Int, {nullable:false})
    iptu!: number;

    @Field(() => Int, {nullable:false})
    describe!: number;

    @Field(() => Int, {nullable:false})
    footage!: number;

    @Field(() => Int, {nullable:false})
    bathroom!: number;

    @Field(() => Int, {nullable:false})
    vacancy!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Int, {nullable:false})
    complement!: number;

    @Field(() => Int, {nullable:false})
    postalcode!: number;

    @Field(() => Int, {nullable:false})
    district!: number;

    @Field(() => Int, {nullable:false})
    state!: number;

    @Field(() => Int, {nullable:false})
    recordId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
