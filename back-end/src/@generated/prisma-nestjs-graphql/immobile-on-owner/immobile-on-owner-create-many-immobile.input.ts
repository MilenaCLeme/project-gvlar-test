import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ImmobileOnOwnerCreateManyImmobileInput {

    @Field(() => Int, {nullable:false})
    ownerId!: number;
}
