
POST Location/
================

Creates or updates the specified location.

### Url
```http
https://api.poweroffice.net/Location/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Location](Type_Location.md)|No|The location.

### Response Content
Type | Array | Description
:----|:------|:------------
[Location](Type_Location.md)|No|Location.

### Request Signature
```http
POST /Location/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "name": string,
    "code": string,
    "isActive": boolean
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
        "isActive": boolean
    },
    "success": boolean
}

```



