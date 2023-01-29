import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImmobileOnOwnerWhereInput } from '../immobile-on-owner/immobile-on-owner-where.input';
import { Type } from 'class-transformer';
import { ImmobileOnOwnerOrderByWithRelationInput } from '../immobile-on-owner/immobile-on-owner-order-by-with-relation.input';
import { ImmobileOnOwnerWhereUniqueInput } from '../immobile-on-owner/immobile-on-owner-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateImmobileOnOwnerArgs {

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
}
