import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Type } from 'class-transformer';
import { ImmobileCreateWithoutPhotographsInput } from './immobile-create-without-photographs.input';

@InputType()
export class ImmobileCreateOrConnectWithoutPhotographsInput {

    @Field(() => ImmobileWhereUniqueInput, {nullable:false})
    @Type(() => ImmobileWhereUniqueInput)
    where!: ImmobileWhereUniqueInput;

    @Field(() => ImmobileCreateWithoutPhotographsInput, {nullable:false})
    @Type(() => ImmobileCreateWithoutPhotographsInput)
    create!: ImmobileCreateWithoutPhotographsInput;
}
