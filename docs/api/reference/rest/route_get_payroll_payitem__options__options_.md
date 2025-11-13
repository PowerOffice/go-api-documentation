
GET Payroll/PayItem/?options=&lt;options&gt;
================

Gets a list of [PayItem](Type_PayItem.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Payroll/PayItem/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[PayItem](Type_PayItem.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Payroll.PayItem&gt;|No|DataPage&lt;payItem&gt;.

### Request Signature
```http
GET /Payroll/PayItem/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "code": string,
        "name": string,
        "isActive": boolean,
        "benefit": string,
        "description": string,
        "processingType": PayItemProcessingType,
        "id": string (Guid)
    }],
    "count": number,
    "success": boolean
}

```



