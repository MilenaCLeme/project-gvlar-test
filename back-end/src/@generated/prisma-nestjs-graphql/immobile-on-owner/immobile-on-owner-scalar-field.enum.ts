import { registerEnumType } from '@nestjs/graphql';

export enum ImmobileOnOwnerScalarFieldEnum {
    immobileId = "immobileId",
    ownerId = "ownerId"
}


registerEnumType(ImmobileOnOwnerScalarFieldEnum, { name: 'ImmobileOnOwnerScalarFieldEnum', description: undefined })
