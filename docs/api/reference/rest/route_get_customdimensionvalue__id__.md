
GET CustomDimensionValue/{id}/
================

Gets the specified customDimensionValue by it's id.

### Url
```http
https://api.poweroffice.net/CustomDimensionValue/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[CustomDimensionValue](Type_CustomDimensionValue.md)|No|CustomDimensionValue.

### Request Signature
```http
GET /CustomDimensionValue/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "name": string,
        "code": string,
        "customDimensionOrdinal": number,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid),
        "externalReference": string
    },
    "success": boolean
}

```



