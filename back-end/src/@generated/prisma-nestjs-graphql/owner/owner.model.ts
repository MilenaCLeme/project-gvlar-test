import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ImmobileOnOwner } from '../immobile-on-owner/immobile-on-owner.model';
import { OwnerCount } from './owner-count.output';

@ObjectType()
export class Owner {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => [ImmobileOnOwner], {nullable:true})
    immobiles?: Array<ImmobileOnOwner>;

    @Field(() => OwnerCount, {nullable:false})
    _count?: OwnerCount;
}
