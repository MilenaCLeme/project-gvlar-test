import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileCreateManyInput } from './immobile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyImmobileArgs {

    @Field(() => [ImmobileCreateManyInput], {nullable:false})
    @Type(() => ImmobileCreateManyInput)
    data!: Array<ImmobileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
