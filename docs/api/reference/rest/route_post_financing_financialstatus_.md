
POST Financing/financialstatus/
================

Updates the [FinancialStatus](Type_FinancialStatus.md) of the client with the credit limit and the amount of the credit that has been used by the client.

### Url
```http
https://api.poweroffice.net/Financing/financialstatus/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[FinancialStatus](Type_FinancialStatus.md)|No|The request

### Response Content
Type | Array | Description
:----|:------|:------------
[FinancialStatus](Type_FinancialStatus.md)|No|FinancialStatus

### Request Signature
```http
POST /Financing/financialstatus/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "creditLimit": number,
    "creditUsed": number
}

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



