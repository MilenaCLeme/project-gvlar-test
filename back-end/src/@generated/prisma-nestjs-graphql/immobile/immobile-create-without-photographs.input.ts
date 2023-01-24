import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutImmobilesInput } from '../user/user-create-nested-one-without-immobiles.input';
import { ImmobileOnOwnerCreateNestedManyWithoutImmobileInput } from '../immobile-on-owner/immobile-on-owner-create-nested-many-without-immobile.input';

@InputType()
export class ImmobileCreateWithoutPhotographsInput {

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    about!: string;

    @Field(() => String, {nullable:true})
    vsell?: string;

    @Field(() => String, {nullable:true})
    vboth?: string;

    @Field(() => String, {nullable:false})
    iptu!: string;

    @Field(() => String, {nullable:false})
    describe!: string;

    @Field(() => Int, {nullable:false})
    footage!: number;

    @Field(() => Int, {nullable:false})
    bathroom!: number;

    @Field(() => Int, {nullable:false})
    vacancy!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => String, {nullable:true})
    complement?: string;

    @Field(() => String, {nullable:false})
    postalcode!: string;

    @Field(() => String, {nullable:false})
    district!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => UserCreateNestedOneWithoutImmobilesInput, {nullable:true})
    record?: UserCreateNestedOneWithoutImmobilesInput;

    @Field(() => ImmobileOnOwnerCreateNestedManyWithoutImmobileInput, {nullable:true})
    owners?: ImmobileOnOwnerCreateNestedManyWithoutImmobileInput;
}
