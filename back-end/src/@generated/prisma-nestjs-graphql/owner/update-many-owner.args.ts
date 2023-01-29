import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OwnerUpdateManyMutationInput } from './owner-update-many-mutation.input';
import { Type } from 'class-transformer';
import { OwnerWhereInput } from './owner-where.input';

@ArgsType()
export class UpdateManyOwnerArgs {

    @Field(() => OwnerUpdateManyMutationInput, {nullable:false})
    @Type(() => OwnerUpdateManyMutationInput)
    data!: OwnerUpdateManyMutationInput;

    @Field(() => OwnerWhereInput, {nullable:true})
    @Type(() => OwnerWhereInput)
    where?: OwnerWhereInput;
}
