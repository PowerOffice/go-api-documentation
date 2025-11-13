
POST Supplier/{parentId}/BankAccount/
================

Creates or updates the specified [PartyBankAccount](Type_PartyBankAccount.md) .

### Url
```http
https://api.poweroffice.net/Supplier/{parentId}/BankAccount/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[PartyBankAccount](Type_PartyBankAccount.md)|No|The party bank account.

### Response Content
Type | Array | Description
:----|:------|:------------
[PartyBankAccount](Type_PartyBankAccount.md)|No|PartyBankAccount.

### Request Signature
```http
POST /Supplier/{parentId}/BankAccount/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "code": string,
    "bicSwift": string,
    "countryCode": string,
    "bankCode": string,
    "isActive": boolean
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
        "code": string,
        "bicSwift": string,
        "countryCode": string,
        "bankCode": string,
        "isActive": boolean,
        "lastChanged": Date
    },
    "success": boolean
}

```



