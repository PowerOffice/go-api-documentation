
GET VatCode/
================

Gets a list of vat codes filtered by odata query.

### Url
```http
https://api.poweroffice.net/VatCode/
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
DataPage&lt;GoApi.Dimension.VatCode&gt;|No|DataPage&lt;VatCode&gt;.

### Request Signature
```http
GET /VatCode/?$filter=<ODataFilter> HTTP/1.1
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
        "description": string,
        "rate": number,
        "isActive": boolean,
        "validFrom": Date,
        "validto": Date,
        "isCustom": boolean,
        "vatBasisRatio": number
    }],
    "count": number,
    "success": boolean
}

```



