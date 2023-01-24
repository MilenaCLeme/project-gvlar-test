import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileUpdateInput } from './immobile-update.input';
import { Type } from 'class-transformer';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';

@ArgsType()
export class UpdateOneImmobileArgs {

    @Field(() => ImmobileUpdateInput, {nullable:false})
    @Type(() => ImmobileUpdateInput)
    data!: ImmobileUpdateInput;

    @Field(() => ImmobileWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileWhereUniqueInput)
    where!: ImmobileWhereUniqueInput;
}
