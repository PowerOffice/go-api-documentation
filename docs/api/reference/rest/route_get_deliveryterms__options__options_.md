
GET DeliveryTerms/?options=&lt;options&gt;
================

Gets a collection of [DeliveryTerm](Type_DeliveryTerm.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/DeliveryTerms/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[DeliveryTerm](Type_DeliveryTerm.md)|The odata options


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Invoices.DeliveryTerm&gt;|No|

### Request Signature
```http
GET /DeliveryTerms/?options=<options> HTTP/1.1
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
        "isDefault": boolean
    }],
    "count": number,
    "success": boolean
}

```



