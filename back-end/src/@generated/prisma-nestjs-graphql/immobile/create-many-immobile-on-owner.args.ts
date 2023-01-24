import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateManyInput } from '../immobile-on-owner/immobile-on-owner-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyImmobileOnOwnerArgs {

    @Field(() => [ImmobileOnOwnerCreateManyInput], {nullable:false})
    @Type(() => ImmobileOnOwnerCreateManyInput)
    data!: Array<ImmobileOnOwnerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
