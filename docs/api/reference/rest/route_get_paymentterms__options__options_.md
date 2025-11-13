
GET PaymentTerms/?options=&lt;options&gt;
================

Gets a list of [PaymentTerm](Type_PaymentTerm.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/PaymentTerms/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[PaymentTerm](Type_PaymentTerm.md)|The odata query options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Invoices.PaymentTerm&gt;|No|DataPage&lt;PaymentTerm&gt;.

### Request Signature
```http
GET /PaymentTerms/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "name": string,
        "creditDays": number,
        "isDefault": boolean
    }],
    "count": number,
    "success": boolean
}

```



