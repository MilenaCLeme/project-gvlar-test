import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereInput } from '../immobile-on-owner/immobile-on-owner-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyImmobileOnOwnerArgs {

    @Field(() => ImmobileOnOwnerWhereInput, {nullable:true})
    @Type(() => ImmobileOnOwnerWhereInput)
    where?: ImmobileOnOwnerWhereInput;
}
