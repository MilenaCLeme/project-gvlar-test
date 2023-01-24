import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileUpdateWithoutPhotographsInput } from './immobile-update-without-photographs.input';
import { Type } from 'class-transformer';
import { ImmobileCreateWithoutPhotographsInput } from './immobile-create-without-photographs.input';

@InputType()
export class ImmobileUpsertWithoutPhotographsInput {

    @Field(() => ImmobileUpdateWithoutPhotographsInput, {nullable:false})
    @Type(() => ImmobileUpdateWithoutPhotographsInput)
    update!: ImmobileUpdateWithoutPhotographsInput;

    @Field(() => ImmobileCreateWithoutPhotographsInput, {nullable:false})
    @Type(() => ImmobileCreateWithoutPhotographsInput)
    create!: ImmobileCreateWithoutPhotographsInput;
}
