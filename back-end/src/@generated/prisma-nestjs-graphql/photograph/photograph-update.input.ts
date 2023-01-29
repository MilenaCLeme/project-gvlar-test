import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ImmobileUpdateOneWithoutPhotographsNestedInput } from '../immobile/immobile-update-one-without-photographs-nested.input';

@InputType()
export class PhotographUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    describe?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => ImmobileUpdateOneWithoutPhotographsNestedInput, {nullable:true})
    immobile?: ImmobileUpdateOneWithoutPhotographsNestedInput;
}
