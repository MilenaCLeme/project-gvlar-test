import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileUpdateOneRequiredWithoutOwnersNestedInput } from '../immobile/immobile-update-one-required-without-owners-nested.input';
import { OwnerUpdateOneRequiredWithoutImmobilesNestedInput } from '../owner/owner-update-one-required-without-immobiles-nested.input';

@InputType()
export class ImmobileOnOwnerUpdateInput {

    @Field(() => ImmobileUpdateOneRequiredWithoutOwnersNestedInput, {nullable:true})
    immobile?: ImmobileUpdateOneRequiredWithoutOwnersNestedInput;

    @Field(() => OwnerUpdateOneRequiredWithoutImmobilesNestedInput, {nullable:true})
    owner?: OwnerUpdateOneRequiredWithoutImmobilesNestedInput;
}
