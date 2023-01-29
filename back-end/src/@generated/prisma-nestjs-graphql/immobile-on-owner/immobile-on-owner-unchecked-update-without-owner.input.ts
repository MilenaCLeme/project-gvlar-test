import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class ImmobileOnOwnerUncheckedUpdateWithoutOwnerInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    immobileId?: IntFieldUpdateOperationsInput;
}
