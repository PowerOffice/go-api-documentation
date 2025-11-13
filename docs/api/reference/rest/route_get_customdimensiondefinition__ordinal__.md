
GET CustomDimensionDefinition/{ordinal}/
================

Gets the specified customDimensionDefinition by its ordinal (number).         Ordinal must be 1,2 or 3. If not then an ArgumentOutOfRangeException is thrown.

### Url
```http
https://api.poweroffice.net/CustomDimensionDefinition/{ordinal}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[CustomDimensionDefinition](Type_CustomDimensionDefinition.md)|No|CustomDimensionDefinition.

### Request Signature
```http
GET /CustomDimensionDefinition/{ordinal}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "ordinal": number,
        "name": string,
        "isActive": boolean
    },
    "success": boolean
}

```



