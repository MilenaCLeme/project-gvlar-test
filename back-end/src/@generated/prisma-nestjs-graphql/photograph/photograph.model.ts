import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Immobile } from '../immobile/immobile.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Photograph {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    describe!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Immobile, {nullable:true})
    immobile?: Immobile | null;

    @Field(() => Int, {nullable:true})
    immobileId!: number | null;
}
