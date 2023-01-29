import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImmobileOnOwnerMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    immobileId?: true;

    @Field(() => Boolean, {nullable:true})
    ownerId?: true;
}
