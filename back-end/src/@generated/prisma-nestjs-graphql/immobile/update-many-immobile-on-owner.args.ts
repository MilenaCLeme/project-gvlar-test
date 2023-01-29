import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerUncheckedUpdateManyInput } from '../immobile-on-owner/immobile-on-owner-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerWhereInput } from '../immobile-on-owner/immobile-on-owner-where.input';

@ArgsType()
export class UpdateManyImmobileOnOwnerArgs {

    @Field(() => ImmobileOnOwnerUncheckedUpdateManyInput, {nullable:false})
    @Type(() => ImmobileOnOwnerUncheckedUpdateManyInput)
    data!: ImmobileOnOwnerUncheckedUpdateManyInput;

    @Field(() => ImmobileOnOwnerWhereInput, {nullable:true})
    @Type(() => ImmobileOnOwnerWhereInput)
    where?: ImmobileOnOwnerWhereInput;
}
