import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateNestedManyWithoutOwnerInput } from '../immobile-on-owner/immobile-on-owner-create-nested-many-without-owner.input';

@InputType()
export class OwnerCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ImmobileOnOwnerCreateNestedManyWithoutOwnerInput, {nullable:true})
    immobiles?: ImmobileOnOwnerCreateNestedManyWithoutOwnerInput;
}
