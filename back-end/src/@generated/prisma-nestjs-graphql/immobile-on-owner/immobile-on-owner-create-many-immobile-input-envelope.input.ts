import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImmobileOnOwnerCreateManyImmobileInput } from './immobile-on-owner-create-many-immobile.input';
import { Type } from 'class-transformer';

@InputType()
export class ImmobileOnOwnerCreateManyImmobileInputEnvelope {

    @Field(() => [ImmobileOnOwnerCreateManyImmobileInput], {nullable:false})
    @Type(() => ImmobileOnOwnerCreateManyImmobileInput)
    data!: Array<ImmobileOnOwnerCreateManyImmobileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
