
GET CustomDimensionValue/?options=&lt;options&gt;
================

Gets a list of customDimensionValues filtered by odata query.

### Url
```http
https://api.poweroffice.net/CustomDimensionValue/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[CustomDimensionValue](Type_CustomDimensionValue.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Dimension.CustomDimensionValue&gt;|No|DataPage&lt;CustomDimensionValue&gt;.

### Request Signature
```http
GET /CustomDimensionValue/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "name": string,
        "code": string,
        "customDimensionOrdinal": number,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid),
        "externalReference": string
    }],
    "count": number,
    "success": boolean
}

```



