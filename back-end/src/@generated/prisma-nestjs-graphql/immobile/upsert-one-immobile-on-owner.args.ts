import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereUniqueInput } from '../immobile-on-owner/immobile-on-owner-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerCreateInput } from '../immobile-on-owner/immobile-on-owner-create.input';
import { ImmobileOnOwnerUpdateInput } from '../immobile-on-owner/immobile-on-owner-update.input';

@ArgsType()
export class UpsertOneImmobileOnOwnerArgs {

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;

    @Field(() => ImmobileOnOwnerCreateInput, {nullable:false})
    @Type(() => ImmobileOnOwnerCreateInput)
    create!: ImmobileOnOwnerCreateInput;

    @Field(() => ImmobileOnOwnerUpdateInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUpdateInput)
    update!: ImmobileOnOwnerUpdateInput;
}
