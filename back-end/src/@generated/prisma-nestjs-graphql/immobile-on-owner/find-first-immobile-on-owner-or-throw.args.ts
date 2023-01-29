import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereInput } from './immobile-on-owner-where.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerOrderByWithRelationInput } from './immobile-on-owner-order-by-with-relation.input';
import { ImmobileOnOwnerWhereUniqueInput } from './immobile-on-owner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ImmobileOnOwnerScalarFieldEnum } from './immobile-on-owner-scalar-field.enum';

@ArgsType()
export class FindFirstImmobileOnOwnerOrThrowArgs {

    @Field(() => ImmobileOnOwnerWhereInput, {nullable:true})
    @Type(() => ImmobileOnOwnerWhereInput)
    where?: ImmobileOnOwnerWhereInput;

    @Field(() => [ImmobileOnOwnerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ImmobileOnOwnerOrderByWithRelationInput>;

    @Field(() => ImmobileOnOwnerWhereUniqueInput, {nullable:true})
    cursor?: ImmobileOnOwnerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ImmobileOnOwnerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ImmobileOnOwnerScalarFieldEnum>;
}
