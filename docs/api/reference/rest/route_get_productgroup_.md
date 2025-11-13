
GET ProductGroup/
================

Gets a list of [ProductGroup](Type_ProductGroup.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ProductGroup/
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
DataPage&lt;GoApi.Products.ProductGroup&gt;|No|DataPage&lt;ProductGroup&gt;.

### Request Signature
```http
GET /ProductGroup/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "code": string,
        "name": string,
        "description": string,
        "type": ProductType,
        "unit": string,
        "costPrice": number,
        "salesPrice": number,
        "salesAccount": number,
        "vatExemptSalesAccount": number,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid)
    }],
    "count": number,
    "success": boolean
}

```



