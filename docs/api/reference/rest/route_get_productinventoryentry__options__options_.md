
GET ProductInventoryEntry/?options=&lt;options&gt;
================

Gets a list of [ProductInventoryEntry](Type_ProductInventoryEntry.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ProductInventoryEntry/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ProductInventoryEntry](Type_ProductInventoryEntry.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Products.ProductInventoryEntry&gt;|No|DataPage&lt;ProductInventoryEntry&gt;.

### Request Signature
```http
GET /ProductInventoryEntry/?options=<options> HTTP/1.1
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



