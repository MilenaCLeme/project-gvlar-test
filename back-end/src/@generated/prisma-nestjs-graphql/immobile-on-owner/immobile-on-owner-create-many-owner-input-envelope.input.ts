import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateManyOwnerInput } from './immobile-on-owner-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class ImmobileOnOwnerCreateManyOwnerInputEnvelope {

    @Field(() => [ImmobileOnOwnerCreateManyOwnerInput], {nullable:false})
    @Type(() => ImmobileOnOwnerCreateManyOwnerInput)
    data!: Array<ImmobileOnOwnerCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
