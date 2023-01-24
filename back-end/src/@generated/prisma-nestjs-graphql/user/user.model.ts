import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Immobile } from '../immobile/immobile.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    validation!: boolean;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => [Immobile], {nullable:true})
    immobiles?: Array<Immobile>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
