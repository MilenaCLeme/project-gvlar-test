import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ImmobileOnOwnerScalarWhereInput {

    @Field(() => [ImmobileOnOwnerScalarWhereInput], {nullable:true})
    AND?: Array<ImmobileOnOwnerScalarWhereInput>;

    @Field(() => [ImmobileOnOwnerScalarWhereInput], {nullable:true})
    OR?: Array<ImmobileOnOwnerScalarWhereInput>;

    @Field(() => [ImmobileOnOwnerScalarWhereInput], {nullable:true})
    NOT?: Array<ImmobileOnOwnerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    immobileId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    ownerId?: IntFilter;
}
