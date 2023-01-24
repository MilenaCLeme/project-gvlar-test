import { registerEnumType } from '@nestjs/graphql';

export enum PhotographScalarFieldEnum {
    id = "id",
    describe = "describe",
    url = "url",
    immobileId = "immobileId"
}


registerEnumType(PhotographScalarFieldEnum, { name: 'PhotographScalarFieldEnum', description: undefined })
