
GET Bank/ClientBankAccount/{id}/
================

Gets the specified client bank account by its id.

### Url
```http
https://api.poweroffice.net/Bank/ClientBankAccount/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ClientBankAccount](Type_ClientBankAccount.md)|No|ClientBankAccount.

### Request Signature
```http
GET /Bank/ClientBankAccount/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



