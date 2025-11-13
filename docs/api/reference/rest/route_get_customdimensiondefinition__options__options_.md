
GET CustomDimensionDefinition/?options=&lt;options&gt;
================

Gets a list of custom dimension definitions filtered by odata query.

### Url
```http
https://api.poweroffice.net/CustomDimensionDefinition/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[CustomDimensionDefinition](Type_CustomDimensionDefinition.md)|


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Dimension.CustomDimensionDefinition&gt;|No|

### Request Signature
```http
GET /CustomDimensionDefinition/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "ordinal": number,
        "name": string,
        "isActive": boolean
    }],
    "count": number,
    "success": boolean
}

```



