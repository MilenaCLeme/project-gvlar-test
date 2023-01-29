import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImmobileOnOwnerUncheckedUpdateManyWithoutOwnerNestedInput } from '../immobile-on-owner/immobile-on-owner-unchecked-update-many-without-owner-nested.input';

@InputType()
export class OwnerUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => ImmobileOnOwnerUncheckedUpdateManyWithoutOwnerNestedInput, {nullable:true})
    immobiles?: ImmobileOnOwnerUncheckedUpdateManyWithoutOwnerNestedInput;
}
