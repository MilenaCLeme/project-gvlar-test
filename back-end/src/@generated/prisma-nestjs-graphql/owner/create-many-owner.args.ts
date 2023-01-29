import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerCreateManyInput } from './owner-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOwnerArgs {

    @Field(() => [OwnerCreateManyInput], {nullable:false})
    @Type(() => OwnerCreateManyInput)
    data!: Array<OwnerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
