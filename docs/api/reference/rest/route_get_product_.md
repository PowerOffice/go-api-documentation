
GET Product/
================

Gets a list of [Product](Type_Product.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Product/
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
DataPage&lt;GoApi.Products.Product&gt;|No|DataPage&lt;Product&gt;.

### Request Signature
```http
GET /Product/?$filter=<ODataFilter> HTTP/1.1
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
        "productGroupId": number,
        "type": ProductType,
        "unitOfMeasureCode": UnitOfMeasureCode,
        "costPrice": number,
        "salesPrice": number,
        "salesAccount": number,
        "vatExemptSalesAccount": number,
        "gtin": string,
        "lastChanged": Date,
        "productsOnHandLastChanged": Date,
        "productsOnHand": number,
        "availableStock": number,
        "isActive": boolean,
        "createdFromImportJournalId": string (Guid),
        "vatCode": string
    }],
    "count": number,
    "success": boolean
}

```



