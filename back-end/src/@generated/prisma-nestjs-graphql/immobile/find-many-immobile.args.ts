import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileWhereInput } from './immobile-where.input';
import { Type } from 'class-transformer';
import { ImmobileOrderByWithRelationInput } from './immobile-order-by-with-relation.input';
import { ImmobileWhereUniqueInput } from './immobile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImmobileScalarFieldEnum } from './immobile-scalar-field.enum';

@ArgsType()
export class FindManyImmobileArgs {

    @Field(() => ImmobileWhereInput, {nullable:true})
    @Type(() => ImmobileWhereInput)
    where?: ImmobileWhereInput;

    @Field(() => [ImmobileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImmobileOrderByWithRelationInput>;

    @Field(() => ImmobileWhereUniqueInput, {nullable:true})
    cursor?: ImmobileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ImmobileScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImmobileScalarFieldEnum>;
}
