import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileWhereInput } from './immobile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyImmobileArgs {

    @Field(() => ImmobileWhereInput, {nullable:true})
    @Type(() => ImmobileWhereInput)
    where?: ImmobileWhereInput;
}
