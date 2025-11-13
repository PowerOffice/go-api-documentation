
GET Reporting/TrialBalance/?date=&lt;date&gt;
================

Get the trial balance as at a specified date.

### Url
```http
https://api.poweroffice.net/Reporting/TrialBalance/?date=<date>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
date|Date|The date.
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
GET /Reporting/TrialBalance/?date=<date>&$filter=<ODataFilter> HTTP/1.1
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



