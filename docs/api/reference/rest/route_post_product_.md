
POST Product/
================

Creates or updates the specified [Product](Type_Product.md) .

### Url
```http
https://api.poweroffice.net/Product/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Product](Type_Product.md)|No|The product.

### Response Content
Type | Array | Description
:----|:------|:------------
[Product](Type_Product.md)|No|Product.

### Request Signature
```http
POST /Product/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
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
    "productsOnHand": number,
    "isActive": boolean,
    "salesAccountAgricultureDepartment": AgricultureDepartment,
    "vatExampleSalesAccountAgricultureDepartment": AgricultureDepartment
}

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



