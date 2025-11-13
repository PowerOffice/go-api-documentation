
GET ProductInventoryEntry/
================

Gets a list of [ProductInventoryEntry](Type_ProductInventoryEntry.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ProductInventoryEntry/
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
DataPage&lt;GoApi.Products.ProductInventoryEntry&gt;|No|DataPage&lt;ProductInventoryEntry&gt;.

### Request Signature
```http
GET /ProductInventoryEntry/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "productCode": string,
        "delta": number,
        "type": ProductInventoryEntryType,
        "createdDate": Date
    }],
    "count": number,
    "success": boolean
}

```



