
GET Reporting/TrialBalance/?date=&lt;date&gt;&cancellationToken=&lt;cancellationToken&gt;
================

Get the trial balance as at the specified date.

### Url
```
http://api.poweroffice.net/Reporting/TrialBalance/?date=<date>&cancellationToken=<cancellationToken>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
date|Date|Yes|The date.
cancellationToken|CancellationToken|Yes|
$filter|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Result set filter
$orderby|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Sort order
$skip|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Skip records in result set
$top|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;TrialBalanceLine&gt;|No|DataPage&lt;TrialBalanceLine&gt;.

### Request Signature
```
GET /Reporting/TrialBalance/?date=<date>&cancellationToken=<cancellationToken>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```
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



