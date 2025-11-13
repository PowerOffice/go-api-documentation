
POST ContactShareholder/
================

Saves the specified [ContactShareholder](Type_ContactShareholder.md) .

### Url
```http
https://api.poweroffice.net/ContactShareholder/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ContactShareholder](Type_ContactShareholder.md)|No|The party.

### Response Content
Type | Array | Description
:----|:------|:------------
[ContactShareholder](Type_ContactShareholder.md)|No|ContactShareholder.

### Request Signature
```http
POST /ContactShareholder/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "partyId": number,
    "partyCustomerCode": number,
    "partySupplierCode": number,
    "name": string,
    "firstName": string,
    "lastName": string,
    "idNumber": string,
    "address": string,
    "countryOfResidence": string,
    "share": number,
    "isPerson": boolean,
    "isPep": boolean,
    "isRca": boolean
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
        "partyCustomerCode": number,
        "partySupplierCode": number,
        "name": string,
        "firstName": string,
        "lastName": string,
        "idNumber": string,
        "address": string,
        "countryOfResidence": string,
        "share": number,
        "isPerson": boolean,
        "isPep": boolean,
        "isRca": boolean,
        "lastChanged": Date
    },
    "success": boolean
}

```



