import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileCreateInput } from './immobile-create.input';
import { ImmobileUpdateInput } from './immobile-update.input';

@ArgsType()
export class UpsertOneImmobileArgs {

    @Field(() => ImmobileWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileWhereUniqueInput)
    where!: ImmobileWhereUniqueInput;

    @Field(() => ImmobileCreateInput, {nullable:false})
    @Type(() => ImmobileCreateInput)
    create!: ImmobileCreateInput;

    @Field(() => ImmobileUpdateInput, {nullable:false})
    @Type(() => ImmobileUpdateInput)
    update!: ImmobileUpdateInput;
}
