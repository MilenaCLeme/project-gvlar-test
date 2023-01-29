import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateNestedOneWithoutPhotographsInput } from '../immobile/immobile-create-nested-one-without-photographs.input';

@InputType()
export class PhotographCreateInput {

    @Field(() => String, {nullable:false})
    describe!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => ImmobileCreateNestedOneWithoutPhotographsInput, {nullable:true})
    immobile?: ImmobileCreateNestedOneWithoutPhotographsInput;
}
