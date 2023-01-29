import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateWithoutPhotographsInput } from './immobile-create-without-photographs.input';
import { Type } from 'class-transformer';
import { ImmobileCreateOrConnectWithoutPhotographsInput } from './immobile-create-or-connect-without-photographs.input';
import { ImmobileUpsertWithoutPhotographsInput } from './immobile-upsert-without-photographs.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { ImmobileUpdateWithoutPhotographsInput } from './immobile-update-without-photographs.input';

@InputType()
export class ImmobileUpdateOneWithoutPhotographsNestedInput {

    @Field(() => ImmobileCreateWithoutPhotographsInput, {nullable:true})
    @Type(() => ImmobileCreateWithoutPhotographsInput)
    create?: ImmobileCreateWithoutPhotographsInput;

    @Field(() => ImmobileCreateOrConnectWithoutPhotographsInput, {nullable:true})
    @Type(() => ImmobileCreateOrConnectWithoutPhotographsInput)
    connectOrCreate?: ImmobileCreateOrConnectWithoutPhotographsInput;

    @Field(() => ImmobileUpsertWithoutPhotographsInput, {nullable:true})
    @Type(() => ImmobileUpsertWithoutPhotographsInput)
    upsert?: ImmobileUpsertWithoutPhotographsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ImmobileWhereUniqueInput, {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    connect?: ImmobileWhereUniqueInput;

    @Field(() => ImmobileUpdateWithoutPhotographsInput, {nullable:true})
    @Type(() => ImmobileUpdateWithoutPhotographsInput)
    update?: ImmobileUpdateWithoutPhotographsInput;
}
