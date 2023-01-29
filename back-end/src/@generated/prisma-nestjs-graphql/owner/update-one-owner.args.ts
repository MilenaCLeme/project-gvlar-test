import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerUpdateInput } from './owner-update.input';
import { Type } from 'class-transformer';
import { OwnerWhereUniqueInput } from './owner-where-unique.input';

@ArgsType()
export class UpdateOneOwnerArgs {

    @Field(() => OwnerUpdateInput, {nullable:false})
    @Type(() => OwnerUpdateInput)
    data!: OwnerUpdateInput;

    @Field(() => OwnerWhereUniqueInput, {nullable:false})
    @Type(() => OwnerWhereUniqueInput)
    where!: OwnerWhereUniqueInput;
}
