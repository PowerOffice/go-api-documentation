
POST Supplier/{parentId}/Contact/
================

Creates or updates the specified [ContactPerson](Type_ContactPerson.md) .

### Url
```http
https://api.poweroffice.net/Supplier/{parentId}/Contact/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ContactPerson](Type_ContactPerson.md)|No|The contact person.

### Response Content
Type | Array | Description
:----|:------|:------------
[ContactPerson](Type_ContactPerson.md)|No|ContactPerson.

### Request Signature
```http
POST /Supplier/{parentId}/Contact/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "firstName": string,
    "lastName": string,
    "emailAddress": string,
    "phoneNumber": string,
    "isActive": boolean,
    "isPep": boolean,
    "isRca": boolean,
    "socialSecurityNumber": string,
    "hasNorwegianSSN": boolean,
    "address1": string,
    "address2": string,
    "city": string,
    "zipCode": string,
    "residenceCountryCode": string,
    "dateOfBirth": Date,
    "placeOfBirth": string,
    "citizenship": string,
    "gender": Gender,
    "externalCode": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "partyId": number,
        "firstName": string,
        "lastName": string,
        "emailAddress": string,
        "phoneNumber": string,
        "lastChanged": Date,
        "isActive": boolean,
        "isPep": boolean,
        "isRca": boolean,
        "partyCustomerCode": number,
        "partySupplierCode": number,
        "socialSecurityNumber": string,
        "hasNorwegianSSN": boolean,
        "address1": string,
        "address2": string,
        "city": string,
        "zipCode": string,
        "residenceCountryCode": string,
        "dateOfBirth": Date,
        "placeOfBirth": string,
        "citizenship": string,
        "gender": Gender,
        "externalCode": string
    },
    "success": boolean
}

```



