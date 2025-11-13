
GET Currency/
================

Gets a list of currencies filtered by a oData query.

### Url
```http
https://api.poweroffice.net/Currency/
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
DataPage&lt;GoApi.Currency.Currency&gt;|No|DataPage&lt;Currencies&gt;.

### Request Signature
```http
GET /Currency/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "code": string,
        "notation": string,
        "isActive": boolean
    }],
    "count": number,
    "success": boolean
}

```



