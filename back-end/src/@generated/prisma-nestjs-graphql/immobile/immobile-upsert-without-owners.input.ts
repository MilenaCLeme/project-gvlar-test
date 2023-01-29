import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileUpdateWithoutOwnersInput } from './immobile-update-without-owners.input';
import { Type } from 'class-transformer';
import { ImmobileCreateWithoutOwnersInput } from './immobile-create-without-owners.input';

@InputType()
export class ImmobileUpsertWithoutOwnersInput {

    @Field(() => ImmobileUpdateWithoutOwnersInput, {nullable:false})
    @Type(() => ImmobileUpdateWithoutOwnersInput)
    update!: ImmobileUpdateWithoutOwnersInput;

    @Field(() => ImmobileCreateWithoutOwnersInput, {nullable:false})
    @Type(() => ImmobileCreateWithoutOwnersInput)
    create!: ImmobileCreateWithoutOwnersInput;
}
