
GET ProductGroup/{id}/
================

Gets the specified [ProductGroup](Type_ProductGroup.md) by its identifier.

### Url
```http
https://api.poweroffice.net/ProductGroup/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ProductGroup](Type_ProductGroup.md)|No|ProductGroup.

### Request Signature
```http
GET /ProductGroup/{id}/ HTTP/1.1
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
    },
    "success": boolean
}

```



