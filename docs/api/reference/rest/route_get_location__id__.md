
GET Location/{id}/
================

Gets the specified location by it's id.

### Url
```http
https://api.poweroffice.net/Location/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[Location](Type_Location.md)|No|Location.

### Request Signature
```http
GET /Location/{id}/ HTTP/1.1
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
        "isActive": boolean
    },
    "success": boolean
}

```



