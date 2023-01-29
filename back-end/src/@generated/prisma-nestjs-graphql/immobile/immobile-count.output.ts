import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImmobileCount {

    @Field(() => Int, {nullable:false})
    photographs?: number;

    @Field(() => Int, {nullable:false})
    owners?: number;
}
