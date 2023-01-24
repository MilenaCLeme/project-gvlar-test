import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerWhereUniqueInput } from './owner-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOwnerOrThrowArgs {

    @Field(() => OwnerWhereUniqueInput, {nullable:false})
    @Type(() => OwnerWhereUniqueInput)
    where!: OwnerWhereUniqueInput;
}
