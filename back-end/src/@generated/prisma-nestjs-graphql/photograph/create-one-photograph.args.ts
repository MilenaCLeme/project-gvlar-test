import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographCreateInput } from './photograph-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePhotographArgs {

    @Field(() => PhotographCreateInput, {nullable:false})
    @Type(() => PhotographCreateInput)
    data!: PhotographCreateInput;
}
