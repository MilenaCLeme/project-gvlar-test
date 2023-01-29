import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileUpdateOneRequiredWithoutOwnersNestedInput } from '../immobile/immobile-update-one-required-without-owners-nested.input';

@InputType()
export class ImmobileOnOwnerUpdateWithoutOwnerInput {

    @Field(() => ImmobileUpdateOneRequiredWithoutOwnersNestedInput, {nullable:true})
    immobile?: ImmobileUpdateOneRequiredWithoutOwnersNestedInput;
}
