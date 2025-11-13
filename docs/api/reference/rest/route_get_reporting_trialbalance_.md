
GET Reporting/TrialBalance/
================

Get the trial balance as at today.

### Url
```http
https://api.poweroffice.net/Reporting/TrialBalance/
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
DataPage&lt;GoApi.Reporting.TrialBalance.TrialBalanceLine&gt;|No|DataPage&lt;TrialBalanceLine&gt;.

### Request Signature
```http
GET /Reporting/TrialBalance/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "accountCode": number,
        "accountName": string,
        "balance": number,
        "budget": number
    }],
    "count": number,
    "success": boolean
}

```



