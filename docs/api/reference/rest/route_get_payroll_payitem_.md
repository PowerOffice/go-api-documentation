
GET Payroll/PayItem/
================

Gets a list of [PayItem](Type_PayItem.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Payroll/PayItem/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Payroll.PayItem&gt;|No|DataPage&lt;payItem&gt;.

### Request Signature
```http
GET /Payroll/PayItem/?$filter=<ODataFilter> HTTP/1.1
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



