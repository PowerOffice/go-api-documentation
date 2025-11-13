
POST Bank/ClientBankAccount/
================

Creates or updates the specified client bank account.

### Url
```http
https://api.poweroffice.net/Bank/ClientBankAccount/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ClientBankAccount](Type_ClientBankAccount.md)|No|The ClientBankAccount.

### Response Content
Type | Array | Description
:----|:------|:------------
[ClientBankAccount](Type_ClientBankAccount.md)|No|ClientBankAccount.

### Request Signature
```http
POST /Bank/ClientBankAccount/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "code": string,
    "bicSwift": string,
    "bankName": string,
    "generalLedgerAccountCode": number,
    "countryCode": string,
    "currencyCode": string,
    "isClientTrustAccount": boolean,
    "generalLedgerAccountAgricultureDepartment": AgricultureDepartment
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "code": string,
        "bicSwift": string,
        "bankName": string,
        "generalLedgerAccountCode": number,
        "countryCode": string,
        "currencyCode": string,
        "hasOutgoingPaymentService": boolean,
        "hasIncomingPaymentService": boolean,
        "isClientTrustAccount": boolean,
        "isCurrentAccount": boolean,
        "generalLedgerAccountAgricultureDepartment": AgricultureDepartment
    },
    "success": boolean
}

```



