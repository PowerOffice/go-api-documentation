
GET PaymentTerms/{id}/
================

Gets the specified [PaymentTerm](Type_PaymentTerm.md) by its identifier.

### Url
```http
https://api.poweroffice.net/PaymentTerms/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[PaymentTerm](Type_PaymentTerm.md)|No|PaymentTerm.

### Request Signature
```http
GET /PaymentTerms/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



