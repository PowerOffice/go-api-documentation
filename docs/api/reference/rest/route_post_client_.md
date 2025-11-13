
POST Client/
================

Updates the specified client.

### Url
```http
https://api.poweroffice.net/Client/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Client](Type_Client.md)|No|The client.

### Response Content
Type | Array | Description
:----|:------|:------------
[Client](Type_Client.md)|No|Client.

### Request Signature
```http
POST /Client/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": string (Guid),
    "name": string,
    "legalName": string,
    "vatNumber": string,
    "mailAddress": {
        "city": string,
        "zipCode": string,
        "address1": string,
        "address2": string,
        "countryCode": string,
        "id": number,
        "isPrimary": boolean,
        "externalCode": string
    },
    "streetAddress": {
        "city": string,
        "zipCode": string,
        "address1": string,
        "address2": string,
        "countryCode": string,
        "id": number,
        "isPrimary": boolean,
        "externalCode": string
    },
    "emailAddress": string,
    "phoneNumber": string,
    "websiteUrl": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": string (Guid),
        "name": string,
        "legalName": string,
        "vatNumber": string,
        "mailAddress": {
            "city": string,
            "zipCode": string,
            "address1": string,
            "address2": string,
            "countryCode": string,
            "lastChanged": Date,
            "id": number,
            "isPrimary": boolean,
            "externalCode": string
        },
        "streetAddress": {
            "city": string,
            "zipCode": string,
            "address1": string,
            "address2": string,
            "countryCode": string,
            "lastChanged": Date,
            "id": number,
            "isPrimary": boolean,
            "externalCode": string
        },
        "emailAddress": string,
        "phoneNumber": string,
        "websiteUrl": string,
        "lastChanged": Date,
        "lockDate": Date,
        "salesAccountCode": number,
        "vatExemptSalesAccountCode": number,
        "isVatRegistered": boolean,
        "isVatCompensationEnabled": boolean,
        "vatPeriod": VatPeriod,
        "financialYearEndMonth": Months,
        "isAgricultureClient": boolean,
        "defaultAgricultureDepartment": AgricultureDepartment
    },
    "success": boolean
}

```



