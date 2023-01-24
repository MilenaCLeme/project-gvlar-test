import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateNestedOneWithoutOwnersInput } from '../immobile/immobile-create-nested-one-without-owners.input';
import { OwnerCreateNestedOneWithoutImmobilesInput } from '../owner/owner-create-nested-one-without-immobiles.input';

@InputType()
export class ImmobileOnOwnerCreateInput {

    @Field(() => ImmobileCreateNestedOneWithoutOwnersInput, {nullable:false})
    immobile!: ImmobileCreateNestedOneWithoutOwnersInput;

    @Field(() => OwnerCreateNestedOneWithoutImmobilesInput, {nullable:false})
    owner!: OwnerCreateNestedOneWithoutImmobilesInput;
}
