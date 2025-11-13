
GET Reporting/TrialBalance/{includeSubProject}?date=&lt;date&gt;&departmentCode=&lt;departmentCode&gt;&productCode=&lt;productCode&gt;&projectCode=&lt;projectCode&gt;
================

Get the trial balance as at a specified date. Filter by department-, product- and/or project-code.

### Url
```http
https://api.poweroffice.net/Reporting/TrialBalance/{includeSubProject}?date=<date>&departmentCode=<departmentCode>&productCode=<productCode>&projectCode=<projectCode>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
date|Date|The date.
departmentCode|string|Department code.
productCode|string|Product code.
projectCode|string|Project code.
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
GET /Reporting/TrialBalance/{includeSubProject}?date=<date>&departmentCode=<departmentCode>&productCode=<productCode>&projectCode=<projectCode>&$filter=<ODataFilter> HTTP/1.1
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



