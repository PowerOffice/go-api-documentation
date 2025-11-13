
GET Financing/
================

Gets the [FinancialStatus](Type_FinancialStatus.md) for given client.

### Url
```http
https://api.poweroffice.net/Financing/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[FinancialStatus](Type_FinancialStatus.md)|No|FinancialStatus

### Request Signature
```http
GET /Financing/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "creditLimit": number,
        "creditUsed": number
    },
    "success": boolean
}

```



