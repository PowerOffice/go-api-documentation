
GET Import/{id}/status/
================

Gets the [ImportStatus](Type_ImportStatus.md) by the [Import](Type_Import.md) id.

### Url
```http
https://api.poweroffice.net/Import/{id}/status/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ImportStatus](Type_ImportStatus.md)|No|ImportStatus.

### Request Signature
```http
GET /Import/{id}/status/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": string (Guid),
        "isPosting": boolean,
        "isPosted": boolean,
        "hasError": boolean,
        "errorDescription": string,
        "canBePosted": boolean
    },
    "success": boolean
}

```



