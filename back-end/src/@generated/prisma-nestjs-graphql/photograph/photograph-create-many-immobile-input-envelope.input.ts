import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotographCreateManyImmobileInput } from './photograph-create-many-immobile.input';
import { Type } from 'class-transformer';

@InputType()
export class PhotographCreateManyImmobileInputEnvelope {

    @Field(() => [PhotographCreateManyImmobileInput], {nullable:false})
    @Type(() => PhotographCreateManyImmobileInput)
    data!: Array<PhotographCreateManyImmobileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
