import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographCreateManyInput } from './photograph-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPhotographArgs {

    @Field(() => [PhotographCreateManyInput], {nullable:false})
    @Type(() => PhotographCreateManyInput)
    data!: Array<PhotographCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
