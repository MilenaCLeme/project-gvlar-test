import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OwnerCreateWithoutImmobilesInput } from './owner-create-without-immobiles.input';
import { Type } from 'class-transformer';
import { OwnerCreateOrConnectWithoutImmobilesInput } from './owner-create-or-connect-without-immobiles.input';
import { OwnerWhereUniqueInput } from './owner-where-unique.input';

@InputType()
export class OwnerCreateNestedOneWithoutImmobilesInput {

    @Field(() => OwnerCreateWithoutImmobilesInput, {nullable:true})
    @Type(() => OwnerCreateWithoutImmobilesInput)
    create?: OwnerCreateWithoutImmobilesInput;

    @Field(() => OwnerCreateOrConnectWithoutImmobilesInput, {nullable:true})
    @Type(() => OwnerCreateOrConnectWithoutImmobilesInput)
    connectOrCreate?: OwnerCreateOrConnectWithoutImmobilesInput;

    @Field(() => OwnerWhereUniqueInput, {nullable:true})
    @Type(() => OwnerWhereUniqueInput)
    connect?: OwnerWhereUniqueInput;
}
