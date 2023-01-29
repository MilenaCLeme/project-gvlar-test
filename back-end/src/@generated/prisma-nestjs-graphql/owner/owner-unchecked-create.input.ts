import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImmobileOnOwnerUncheckedCreateNestedManyWithoutOwnerInput } from '../immobile-on-owner/immobile-on-owner-unchecked-create-nested-many-without-owner.input';

@InputType()
export class OwnerUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ImmobileOnOwnerUncheckedCreateNestedManyWithoutOwnerInput, {nullable:true})
    immobiles?: ImmobileOnOwnerUncheckedCreateNestedManyWithoutOwnerInput;
}
