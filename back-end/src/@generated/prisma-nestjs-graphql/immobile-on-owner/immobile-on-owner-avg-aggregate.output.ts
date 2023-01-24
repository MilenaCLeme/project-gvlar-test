import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ImmobileOnOwnerAvgAggregate {

    @Field(() => Float, {nullable:true})
    immobileId?: number;

    @Field(() => Float, {nullable:true})
    ownerId?: number;
}
