import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Immobile } from '../immobile/immobile.model';
import { Int } from '@nestjs/graphql';
import { Owner } from '../owner/owner.model';

@ObjectType()
export class ImmobileOnOwner {

    @Field(() => Immobile, {nullable:false})
    immobile?: Immobile;

    @Field(() => Int, {nullable:false})
    immobileId!: number;

    @Field(() => Owner, {nullable:false})
    owner?: Owner;

    @Field(() => Int, {nullable:false})
    ownerId!: number;
}
