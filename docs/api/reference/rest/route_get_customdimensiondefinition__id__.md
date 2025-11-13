
GET CustomDimensionDefinition/{id}/
================

Gets the specified customDimensionDefinition by it's id.

### Url
```http
https://api.poweroffice.net/CustomDimensionDefinition/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[CustomDimensionDefinition](Type_CustomDimensionDefinition.md)|No|CustomDimensionDefinition.

### Request Signature
```http
GET /CustomDimensionDefinition/{id}/ HTTP/1.1
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
        "ordinal": number,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid)
    },
    "success": boolean
}

```



