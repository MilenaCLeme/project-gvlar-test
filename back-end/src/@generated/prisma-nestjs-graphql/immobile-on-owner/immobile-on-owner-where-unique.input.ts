import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerImmobileIdOwnerIdCompoundUniqueInput } from './immobile-on-owner-immobile-id-owner-id-compound-unique.input';

@InputType()
export class ImmobileOnOwnerWhereUniqueInput {

    @Field(() => ImmobileOnOwnerImmobileIdOwnerIdCompoundUniqueInput, {nullable:true})
    immobileId_ownerId?: ImmobileOnOwnerImmobileIdOwnerIdCompoundUniqueInput;
}
