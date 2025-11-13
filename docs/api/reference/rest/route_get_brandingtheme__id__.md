
GET BrandingTheme/{id}/
================

Gets the specified [BrandingTheme](Type_BrandingTheme.md) by its id.

### Url
```http
https://api.poweroffice.net/BrandingTheme/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[BrandingTheme](Type_BrandingTheme.md)|No|BrandingTheme.

### Request Signature
```http
GET /BrandingTheme/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "code": string,
        "name": string,
        "countryCode": string,
        "languageCode": string
    },
    "success": boolean
}

```



