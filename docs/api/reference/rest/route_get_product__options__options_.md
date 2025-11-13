
GET Product/?options=&lt;options&gt;
================

Gets a list of [Product](Type_Product.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Product/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Product](Type_Product.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Products.Product&gt;|No|DataPage&lt;Product&gt;.

### Request Signature
```http
GET /Product/?options=<options> HTTP/1.1
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
        "vatCode": string,
        "salesAccountAgricultureDepartment": AgricultureDepartment,
        "vatExampleSalesAccountAgricultureDepartment": AgricultureDepartment
    }],
    "count": number,
    "success": boolean
}

```



