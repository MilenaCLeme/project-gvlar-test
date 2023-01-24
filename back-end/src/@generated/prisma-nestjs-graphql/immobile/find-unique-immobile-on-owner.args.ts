import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereUniqueInput } from '../immobile-on-owner/immobile-on-owner-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueImmobileOnOwnerArgs {

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileOnOwnerWhereUniqueInput)
    where!: ImmobileOnOwnerWhereUniqueInput;
}
