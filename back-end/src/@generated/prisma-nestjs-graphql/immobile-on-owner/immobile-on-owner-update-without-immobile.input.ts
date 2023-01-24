import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OwnerUpdateOneRequiredWithoutImmobilesNestedInput } from '../owner/owner-update-one-required-without-immobiles-nested.input';

@InputType()
export class ImmobileOnOwnerUpdateWithoutImmobileInput {

    @Field(() => OwnerUpdateOneRequiredWithoutImmobilesNestedInput, {nullable:true})
    owner?: OwnerUpdateOneRequiredWithoutImmobilesNestedInput;
}
