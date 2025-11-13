
GET PaymentTerms/
================

Gets a list of [PaymentTerm](Type_PaymentTerm.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/PaymentTerms/
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
DataPage&lt;GoApi.Invoices.PaymentTerm&gt;|No|DataPage&lt;PaymentTerm&gt;.

### Request Signature
```http
GET /PaymentTerms/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "name": string,
        "creditDays": number,
        "isDefault": boolean
    }],
    "count": number,
    "success": boolean
}

```



