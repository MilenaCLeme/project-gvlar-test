import { registerEnumType } from '@nestjs/graphql';

export enum ImmobileScalarFieldEnum {
    id = "id",
    published = "published",
    type = "type",
    about = "about",
    vsell = "vsell",
    vboth = "vboth",
    iptu = "iptu",
    describe = "describe",
    footage = "footage",
    bathroom = "bathroom",
    vacancy = "vacancy",
    address = "address",
    number = "number",
    complement = "complement",
    postalcode = "postalcode",
    district = "district",
    state = "state",
    recordId = "recordId"
}


registerEnumType(ImmobileScalarFieldEnum, { name: 'ImmobileScalarFieldEnum', description: undefined })
