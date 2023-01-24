import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerWhereUniqueInput } from './owner-where-unique.input';
import { Type } from 'class-transformer';
import { OwnerCreateInput } from './owner-create.input';
import { OwnerUpdateInput } from './owner-update.input';

@ArgsType()
export class UpsertOneOwnerArgs {

    @Field(() => OwnerWhereUniqueInput, {nullable:false})
    @Type(() => OwnerWhereUniqueInput)
    where!: OwnerWhereUniqueInput;

    @Field(() => OwnerCreateInput, {nullable:false})
    @Type(() => OwnerCreateInput)
    create!: OwnerCreateInput;

    @Field(() => OwnerUpdateInput, {nullable:false})
    @Type(() => OwnerUpdateInput)
    update!: OwnerUpdateInput;
}
