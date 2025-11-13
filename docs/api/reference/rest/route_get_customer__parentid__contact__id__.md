
GET Customer/{parentId}/Contact/{id}/
================

Gets the specified [ContactPerson](Type_ContactPerson.md) by its id and its parent identifier ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) ).

### Url
```http
https://api.poweroffice.net/Customer/{parentId}/Contact/{id}/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[ContactPerson](Type_ContactPerson.md)|No|ContactPerson.

### Request Signature
```http
GET /Customer/{parentId}/Contact/{id}/?$filter=<ODataFilter> HTTP/1.1
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



