
POST CustomDimensionDefinition/
================

Updates the specified customDimensionDefinition.         Ordinal must be 1,2 or 3. If not then an ArgumentOutOfRangeException is thrown.

### Url
```http
https://api.poweroffice.net/CustomDimensionDefinition/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[CustomDimensionDefinition](Type_CustomDimensionDefinition.md)|No|The customDimensionDefinition.

### Response Content
Type | Array | Description
:----|:------|:------------
[CustomDimensionDefinition](Type_CustomDimensionDefinition.md)|No|CustomDimensionDefinition.

### Request Signature
```http
POST /CustomDimensionDefinition/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "ordinal": number,
    "name": string,
    "isActive": boolean
}

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



