import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateInput } from '../immobile-on-owner/immobile-on-owner-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneImmobileOnOwnerArgs {

    @Field(() => ImmobileOnOwnerCreateInput, {nullable:false})
    @Type(() => ImmobileOnOwnerCreateInput)
    data!: ImmobileOnOwnerCreateInput;
}
