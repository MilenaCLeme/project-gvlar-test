import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateNestedOneWithoutOwnersInput } from '../immobile/immobile-create-nested-one-without-owners.input';

@InputType()
export class ImmobileOnOwnerCreateWithoutOwnerInput {

    @Field(() => ImmobileCreateNestedOneWithoutOwnersInput, {nullable:false})
    immobile!: ImmobileCreateNestedOneWithoutOwnersInput;
}
