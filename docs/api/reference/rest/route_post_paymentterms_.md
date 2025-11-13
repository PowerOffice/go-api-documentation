
POST PaymentTerms/
================

Creates or updates the specified [PaymentTerm](Type_PaymentTerm.md) .

### Url
```http
https://api.poweroffice.net/PaymentTerms/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[PaymentTerm](Type_PaymentTerm.md)|No|The general ledger account.

### Response Content
Type | Array | Description
:----|:------|:------------
[PaymentTerm](Type_PaymentTerm.md)|No|PaymentTerm.

### Request Signature
```http
POST /PaymentTerms/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "name": string,
    "creditDays": number,
    "isDefault": boolean
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "name": string,
        "creditDays": number,
        "isDefault": boolean
    },
    "success": boolean
}

```



