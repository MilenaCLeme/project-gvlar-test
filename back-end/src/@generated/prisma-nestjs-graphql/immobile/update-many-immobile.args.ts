import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileUpdateManyMutationInput } from './immobile-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ImmobileWhereInput } from './immobile-where.input';

@ArgsType()
export class UpdateManyImmobileArgs {

    @Field(() => ImmobileUpdateManyMutationInput, {nullable:false})
    @Type(() => ImmobileUpdateManyMutationInput)
    data!: ImmobileUpdateManyMutationInput;

    @Field(() => ImmobileWhereInput, {nullable:true})
    @Type(() => ImmobileWhereInput)
    where?: ImmobileWhereInput;
}
