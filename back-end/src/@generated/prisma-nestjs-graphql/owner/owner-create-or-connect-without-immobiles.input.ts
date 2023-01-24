import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OwnerWhereUniqueInput } from './owner-where-unique.input';
import { Type } from 'class-transformer';
import { OwnerCreateWithoutImmobilesInput } from './owner-create-without-immobiles.input';

@InputType()
export class OwnerCreateOrConnectWithoutImmobilesInput {

    @Field(() => OwnerWhereUniqueInput, {nullable:false})
    @Type(() => OwnerWhereUniqueInput)
    where!: OwnerWhereUniqueInput;

    @Field(() => OwnerCreateWithoutImmobilesInput, {nullable:false})
    @Type(() => OwnerCreateWithoutImmobilesInput)
    create!: OwnerCreateWithoutImmobilesInput;
}
