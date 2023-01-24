import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PhotographUpdateManyMutationInput } from './photograph-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PhotographWhereInput } from './photograph-where.input';

@ArgsType()
export class UpdateManyPhotographArgs {

    @Field(() => PhotographUpdateManyMutationInput, {nullable:false})
    @Type(() => PhotographUpdateManyMutationInput)
    data!: PhotographUpdateManyMutationInput;

    @Field(() => PhotographWhereInput, {nullable:true})
    @Type(() => PhotographWhereInput)
    where?: PhotographWhereInput;
}
