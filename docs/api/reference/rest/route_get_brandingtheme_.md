
GET BrandingTheme/
================

Gets a list of [BrandingTheme](Type_BrandingTheme.md) available on the client filtered by odata query.

### Url
```http
https://api.poweroffice.net/BrandingTheme/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Invoices.BrandingTheme&gt;|No|DataPage&lt;BrandingTheme&gt;.

### Request Signature
```http
GET /BrandingTheme/?$filter=<ODataFilter> HTTP/1.1
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



