import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PhotographCreateWithoutImmobileInput {

    @Field(() => String, {nullable:false})
    describe!: string;

    @Field(() => String, {nullable:false})
    url!: string;
}
