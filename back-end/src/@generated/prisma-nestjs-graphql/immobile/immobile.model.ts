import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Photograph } from '../photograph/photograph.model';
import { ImmobileOnOwner } from '../immobile-on-owner/immobile-on-owner.model';
import { ImmobileCount } from './immobile-count.output';

@ObjectType()
export class Immobile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    published!: boolean;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    about!: string;

    @Field(() => String, {nullable:true})
    vsell!: string | null;

    @Field(() => String, {nullable:true})
    vboth!: string | null;

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
    complement!: string | null;

    @Field(() => String, {nullable:false})
    postalcode!: string;

    @Field(() => String, {nullable:false})
    district!: string;

    @Field(() => String, {nullable:false})
    state!: string;

    @Field(() => User, {nullable:true})
    record?: User | null;

    @Field(() => Int, {nullable:true})
    recordId!: number | null;

    @Field(() => [Photograph], {nullable:true})
    photographs?: Array<Photograph>;

    @Field(() => [ImmobileOnOwner], {nullable:true})
    owners?: Array<ImmobileOnOwner>;

    @Field(() => ImmobileCount, {nullable:false})
    _count?: ImmobileCount;
}
