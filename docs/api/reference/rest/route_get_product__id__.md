
GET Product/{id}/
================

Gets the specified [Product](Type_Product.md) by its identifier.

### Url
```http
https://api.poweroffice.net/Product/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[Product](Type_Product.md)|No|Product.

### Request Signature
```http
GET /Product/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



