
POST ProductGroup/
================

Creates or updates the specified [ProductGroup](Type_ProductGroup.md) .

### Url
```http
https://api.poweroffice.net/ProductGroup/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ProductGroup](Type_ProductGroup.md)|No|The product group.

### Response Content
Type | Array | Description
:----|:------|:------------
[ProductGroup](Type_ProductGroup.md)|No|ProductGroup.

### Request Signature
```http
POST /ProductGroup/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
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
    "vatExemptSalesAccountAgricultureDepartment": AgricultureDepartment
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



