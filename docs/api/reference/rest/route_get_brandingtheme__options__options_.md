
GET BrandingTheme/?options=&lt;options&gt;
================

Gets a list of [BrandingTheme](Type_BrandingTheme.md) available on the client filtered by odata query.

### Url
```http
https://api.poweroffice.net/BrandingTheme/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[BrandingTheme](Type_BrandingTheme.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Invoices.BrandingTheme&gt;|No|DataPage&lt;BrandingTheme&gt;.

### Request Signature
```http
GET /BrandingTheme/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "code": string,
        "name": string,
        "countryCode": string,
        "languageCode": string
    }],
    "count": number,
    "success": boolean
}

```



