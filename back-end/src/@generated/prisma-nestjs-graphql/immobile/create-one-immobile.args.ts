import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileCreateInput } from './immobile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneImmobileArgs {

    @Field(() => ImmobileCreateInput, {nullable:false})
    @Type(() => ImmobileCreateInput)
    data!: ImmobileCreateInput;
}
