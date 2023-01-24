import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotographUncheckedCreateNestedManyWithoutImmobileInput } from '../photograph/photograph-unchecked-create-nested-many-without-immobile.input';
import { ImmobileOnOwnerUncheckedCreateNestedManyWithoutImmobileInput } from '../immobile-on-owner/immobile-on-owner-unchecked-create-nested-many-without-immobile.input';

@InputType()
export class ImmobileUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    recordId?: number;

    @Field(() => PhotographUncheckedCreateNestedManyWithoutImmobileInput, {nullable:true})
    photographs?: PhotographUncheckedCreateNestedManyWithoutImmobileInput;

    @Field(() => ImmobileOnOwnerUncheckedCreateNestedManyWithoutImmobileInput, {nullable:true})
    owners?: ImmobileOnOwnerUncheckedCreateNestedManyWithoutImmobileInput;
}
