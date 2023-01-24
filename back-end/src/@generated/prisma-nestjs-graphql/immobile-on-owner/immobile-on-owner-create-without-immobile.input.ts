import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OwnerCreateNestedOneWithoutImmobilesInput } from '../owner/owner-create-nested-one-without-immobiles.input';

@InputType()
export class ImmobileOnOwnerCreateWithoutImmobileInput {

    @Field(() => OwnerCreateNestedOneWithoutImmobilesInput, {nullable:false})
    owner!: OwnerCreateNestedOneWithoutImmobilesInput;
}
