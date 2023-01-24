import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerCreateInput } from './owner-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOwnerArgs {

    @Field(() => OwnerCreateInput, {nullable:false})
    @Type(() => OwnerCreateInput)
    data!: OwnerCreateInput;
}
