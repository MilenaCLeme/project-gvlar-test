import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImmobileOnOwnerUpdateManyWithoutOwnerNestedInput } from '../immobile-on-owner/immobile-on-owner-update-many-without-owner-nested.input';

@InputType()
export class OwnerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => ImmobileOnOwnerUpdateManyWithoutOwnerNestedInput, {nullable:true})
    immobiles?: ImmobileOnOwnerUpdateManyWithoutOwnerNestedInput;
}
