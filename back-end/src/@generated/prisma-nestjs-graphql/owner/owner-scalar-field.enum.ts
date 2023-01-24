import { registerEnumType } from '@nestjs/graphql';

export enum OwnerScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    phone = "phone"
}


registerEnumType(OwnerScalarFieldEnum, { name: 'OwnerScalarFieldEnum', description: undefined })
