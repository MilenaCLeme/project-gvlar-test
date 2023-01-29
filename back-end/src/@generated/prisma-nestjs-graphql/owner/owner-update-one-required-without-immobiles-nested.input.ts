import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OwnerCreateWithoutImmobilesInput } from './owner-create-without-immobiles.input';
import { Type } from 'class-transformer';
import { OwnerCreateOrConnectWithoutImmobilesInput } from './owner-create-or-connect-without-immobiles.input';
import { OwnerUpsertWithoutImmobilesInput } from './owner-upsert-without-immobiles.input';
import { OwnerWhereUniqueInput } from './owner-where-unique.input';
import { OwnerUpdateWithoutImmobilesInput } from './owner-update-without-immobiles.input';

@InputType()
export class OwnerUpdateOneRequiredWithoutImmobilesNestedInput {

    @Field(() => OwnerCreateWithoutImmobilesInput, {nullable:true})
    @Type(() => OwnerCreateWithoutImmobilesInput)
    create?: OwnerCreateWithoutImmobilesInput;

    @Field(() => OwnerCreateOrConnectWithoutImmobilesInput, {nullable:true})
    @Type(() => OwnerCreateOrConnectWithoutImmobilesInput)
    connectOrCreate?: OwnerCreateOrConnectWithoutImmobilesInput;

    @Field(() => OwnerUpsertWithoutImmobilesInput, {nullable:true})
    @Type(() => OwnerUpsertWithoutImmobilesInput)
    upsert?: OwnerUpsertWithoutImmobilesInput;

    @Field(() => OwnerWhereUniqueInput, {nullable:true})
    @Type(() => OwnerWhereUniqueInput)
    connect?: OwnerWhereUniqueInput;

    @Field(() => OwnerUpdateWithoutImmobilesInput, {nullable:true})
    @Type(() => OwnerUpdateWithoutImmobilesInput)
    update?: OwnerUpdateWithoutImmobilesInput;
}
