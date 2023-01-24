import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerUpdateInput } from '../immobile-on-owner/immobile-on-owner-update.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerWhereUniqueInput } from '../immobile-on-owner/immobile-on-owner-where-unique.input';

@ArgsType()
export class UpdateOneImmobileOnOwnerArgs {

    @Field(() => ImmobileOnOwnerUpdateInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUpdateInput)
    data!: ImmobileOnOwnerUpdateInput;

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;
}
