import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImmobileOnOwnerCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    immobileId?: true;

    @Field(() => Boolean, {nullable:true})
    ownerId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
