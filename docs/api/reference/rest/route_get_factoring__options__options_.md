
GET Factoring/?options=&lt;options&gt;
================

Gets the factoring settings for given client.

### Url
```http
https://api.poweroffice.net/Factoring/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[FactoringSetting](Type_FactoringSetting.md)|


### Response Content
Type | Array | Description
:----|:------|:------------
[FactoringSetting](Type_FactoringSetting.md)|Yes|Factoring settings with account codes for interest, cost and supplier subledger account.

### Request Signature
```http
GET /Factoring/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "interestAccountCode": number,
        "expenseAccountCode": number,
        "factoringCompanySupplierAccountCode": number
    }],
    "count": number,
    "success": boolean
}

```



