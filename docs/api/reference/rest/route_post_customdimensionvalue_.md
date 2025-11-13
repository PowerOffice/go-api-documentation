
POST CustomDimensionValue/
================

Creates or updates the specified customDimensionValue.

### Url
```http
https://api.poweroffice.net/CustomDimensionValue/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[CustomDimensionValue](Type_CustomDimensionValue.md)|No|The customDimensionValue.

### Response Content
Type | Array | Description
:----|:------|:------------
[CustomDimensionValue](Type_CustomDimensionValue.md)|No|CustomDimensionValue.

### Request Signature
```http
POST /CustomDimensionValue/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "name": string,
    "code": string,
    "customDimensionOrdinal": number,
    "isActive": boolean,
    "externalReference": string
}

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



