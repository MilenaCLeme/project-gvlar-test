import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateWithoutPhotographsInput } from './immobile-create-without-photographs.input';
import { Type } from 'class-transformer';
import { ImmobileCreateOrConnectWithoutPhotographsInput } from './immobile-create-or-connect-without-photographs.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';

@InputType()
export class ImmobileCreateNestedOneWithoutPhotographsInput {

    @Field(() => ImmobileCreateWithoutPhotographsInput, {nullable:true})
    @Type(() => ImmobileCreateWithoutPhotographsInput)
    create?: ImmobileCreateWithoutPhotographsInput;

    @Field(() => ImmobileCreateOrConnectWithoutPhotographsInput, {nullable:true})
    @Type(() => ImmobileCreateOrConnectWithoutPhotographsInput)
    connectOrCreate?: ImmobileCreateOrConnectWithoutPhotographsInput;

    @Field(() => ImmobileWhereUniqueInput, {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    connect?: ImmobileWhereUniqueInput;
}
