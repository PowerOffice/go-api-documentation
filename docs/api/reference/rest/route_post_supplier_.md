
POST Supplier/
================

Saves the specified party ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ).

### Url
```http
https://api.poweroffice.net/Supplier/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Supplier](Type_Supplier.md)|No|The party.

### Response Content
Type | Array | Description
:----|:------|:------------
[Supplier](Type_Supplier.md)|No|Party.

### Request Signature
```http
POST /Supplier/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "standardGeneralLedgerAccountCode": number,
    "standardGeneralLedgerAccountAgricultureDepartment": AgricultureDepartment,
    "name": string,
    "legalName": string,
    "contactPersonId": number,
    "vatNumber": string,
    "websiteUrl": string,
    "since": Date,
    "isPerson": boolean,
    "currencyCode": string,
    "isActive": boolean,
    "id": number,
    "code": number,
    "externalCode": number,
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
    "streetAddresses": [{
        "city": string,
        "zipCode": string,
        "address1": string,
        "address2": string,
        "countryCode": string,
        "id": number,
        "isPrimary": boolean,
        "externalCode": string
    }],
    "emailAddress": string,
    "phoneNumber": string,
    "isArchived": boolean,
    "contactGroups": string,
    "firstName": string,
    "lastName": string,
    "dateOfBirth": Date,
    "socialSecurityNumber": string,
    "subledgerNumberSeriesId": string (Guid),
    "reportInternationalId": boolean,
    "internationalIdCountryCode": string,
    "internationalIdType": InternationalIdType,
    "internationalIdNumber": string,
    "externalImportReference": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "standardGeneralLedgerAccountCode": number,
        "supplierCreatedDate": Date,
        "standardGeneralLedgerAccountAgricultureDepartment": AgricultureDepartment,
        "name": string,
        "legalName": string,
        "contactPersonId": number,
        "vatNumber": string,
        "websiteUrl": string,
        "since": Date,
        "isPerson": boolean,
        "currencyCode": string,
        "isActive": boolean,
        "id": number,
        "code": number,
        "externalCode": number,
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
        "streetAddresses": [{
            "city": string,
            "zipCode": string,
            "address1": string,
            "address2": string,
            "countryCode": string,
            "lastChanged": Date,
            "id": number,
            "isPrimary": boolean,
            "externalCode": string
        }],
        "emailAddress": string,
        "phoneNumber": string,
        "isArchived": boolean,
        "lastChanged": Date,
        "createdDate": Date,
        "contactGroups": string,
        "createdFromImportJournalId": string (Guid),
        "firstName": string,
        "lastName": string,
        "dateOfBirth": Date,
        "socialSecurityNumber": string,
        "subledgerNumberSeriesId": string (Guid),
        "reportInternationalId": boolean,
        "internationalIdCountryCode": string,
        "internationalIdType": InternationalIdType,
        "internationalIdNumber": string,
        "externalImportReference": string
    },
    "success": boolean
}

```



