import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileCreateWithoutOwnersInput } from './immobile-create-without-owners.input';
import { Type } from 'class-transformer';
import { ImmobileCreateOrConnectWithoutOwnersInput } from './immobile-create-or-connect-without-owners.input';
import { ImmobileUpsertWithoutOwnersInput } from './immobile-upsert-without-owners.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { ImmobileUpdateWithoutOwnersInput } from './immobile-update-without-owners.input';

@InputType()
export class ImmobileUpdateOneRequiredWithoutOwnersNestedInput {

    @Field(() => ImmobileCreateWithoutOwnersInput, {nullable:true})
    @Type(() => ImmobileCreateWithoutOwnersInput)
    create?: ImmobileCreateWithoutOwnersInput;

    @Field(() => ImmobileCreateOrConnectWithoutOwnersInput, {nullable:true})
    @Type(() => ImmobileCreateOrConnectWithoutOwnersInput)
    connectOrCreate?: ImmobileCreateOrConnectWithoutOwnersInput;

    @Field(() => ImmobileUpsertWithoutOwnersInput, {nullable:true})
    @Type(() => ImmobileUpsertWithoutOwnersInput)
    upsert?: ImmobileUpsertWithoutOwnersInput;

    @Field(() => ImmobileWhereUniqueInput, {nullable:true})
    @Type(() => ImmobileWhereUniqueInput)
    connect?: ImmobileWhereUniqueInput;

    @Field(() => ImmobileUpdateWithoutOwnersInput, {nullable:true})
    @Type(() => ImmobileUpdateWithoutOwnersInput)
    update?: ImmobileUpdateWithoutOwnersInput;
}
