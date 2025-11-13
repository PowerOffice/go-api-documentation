
GET SubledgerNumberSeries/
================

Gets a list of sub ledger number series filtered by odata query.

### Url
```http
https://api.poweroffice.net/SubledgerNumberSeries/
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
DataPage&lt;GoApi.AccountingSettings.SubledgerNumberSeries&gt;|No|DataPage&lt;SubledgerNumberSeries&gt;.

### Request Signature
```http
GET /SubledgerNumberSeries/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "type": SubledgerNumberSeriesType,
        "fromInclusive": number,
        "toInclusive": number,
        "generalLedgerAccountCode": number,
        "name": string,
        "isClientTrust": boolean,
        "isDefault": boolean
    }],
    "count": number,
    "success": boolean
}

```



