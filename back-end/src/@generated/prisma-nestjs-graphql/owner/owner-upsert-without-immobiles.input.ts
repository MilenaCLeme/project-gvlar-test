import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OwnerUpdateWithoutImmobilesInput } from './owner-update-without-immobiles.input';
import { Type } from 'class-transformer';
import { OwnerCreateWithoutImmobilesInput } from './owner-create-without-immobiles.input';

@InputType()
export class OwnerUpsertWithoutImmobilesInput {

    @Field(() => OwnerUpdateWithoutImmobilesInput, {nullable:false})
    @Type(() => OwnerUpdateWithoutImmobilesInput)
    update!: OwnerUpdateWithoutImmobilesInput;

    @Field(() => OwnerCreateWithoutImmobilesInput, {nullable:false})
    @Type(() => OwnerCreateWithoutImmobilesInput)
    create!: OwnerCreateWithoutImmobilesInput;
}
