import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerWhereInput } from './owner-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyOwnerArgs {

    @Field(() => OwnerWhereInput, {nullable:true})
    @Type(() => OwnerWhereInput)
    where?: OwnerWhereInput;
}
