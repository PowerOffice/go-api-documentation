
GET DeliveryTerms/
================

Gets a collection of [DeliveryTerm](Type_DeliveryTerm.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/DeliveryTerms/
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
DataPage&lt;GoApi.Invoices.DeliveryTerm&gt;|No|

### Request Signature
```http
GET /DeliveryTerms/?$filter=<ODataFilter> HTTP/1.1
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



