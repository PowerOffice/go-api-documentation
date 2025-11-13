
GET Supplier/{parentId}/Contact/{id}?options=&lt;options&gt;
================

Gets the specified [ContactPerson](Type_ContactPerson.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) ).

### Url
```http
https://api.poweroffice.net/Supplier/{parentId}/Contact/{id}?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ContactPerson](Type_ContactPerson.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
[ContactPerson](Type_ContactPerson.md)|No|ContactPerson.

### Request Signature
```http
GET /Supplier/{parentId}/Contact/{id}?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

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



