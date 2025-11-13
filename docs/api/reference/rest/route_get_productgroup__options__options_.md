
GET ProductGroup/?options=&lt;options&gt;
================

Gets a list of [ProductGroup](Type_ProductGroup.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ProductGroup/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ProductGroup](Type_ProductGroup.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Products.ProductGroup&gt;|No|DataPage&lt;ProductGroup&gt;.

### Request Signature
```http
GET /ProductGroup/?options=<options> HTTP/1.1
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
        "salesAccountAgricultureDepartment": AgricultureDepartment,
        "vatExemptSalesAccount": number,
        "vatExemptSalesAccountAgricultureDepartment": AgricultureDepartment,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid)
    }],
    "count": number,
    "success": boolean
}

```



