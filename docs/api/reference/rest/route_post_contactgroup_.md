
POST ContactGroup/
================

Creates or updates the specified [ContactGroup](Type_ContactGroup.md) .

### Url
```http
https://api.poweroffice.net/ContactGroup/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ContactGroup](Type_ContactGroup.md)|No|The contact group.

### Response Content
Type | Array | Description
:----|:------|:------------
[ContactGroup](Type_ContactGroup.md)|No|ContactGroup.

### Request Signature
```http
POST /ContactGroup/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "title": string,
    "sendInvoicesToGroup": boolean
}

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



