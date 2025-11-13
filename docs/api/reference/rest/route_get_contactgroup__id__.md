
GET ContactGroup/{id}/
================

Gets the specified [ContactGroup](Type_ContactGroup.md) by its identifier.

### Url
```http
https://api.poweroffice.net/ContactGroup/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ContactGroup](Type_ContactGroup.md)|No|ContactGroup.

### Request Signature
```http
GET /ContactGroup/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "title": string,
        "sendInvoicesToGroup": boolean
    },
    "success": boolean
}

```



