
GET Reporting/TrialBalance/?date=&lt;date&gt;&depCode=&lt;depCode&gt;&prodCode=&lt;prodCode&gt;&projCode=&lt;projCode&gt;&includeSubProj=&lt;includeSubProj&gt;&onlyNoDep=&lt;onlyNoDep&gt;&options=&lt;options&gt;
================

Get the trial balance as at a specified date. Filter by department-, product- and/or project-code.

### Url
```http
https://api.poweroffice.net/Reporting/TrialBalance/?date=<date>&depCode=<depCode>&prodCode=<prodCode>&projCode=<projCode>&includeSubProj=<includeSubProj>&onlyNoDep=<onlyNoDep>&options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
date|Date|The date.
depCode|string|Department code. If blank, all departments are returned (no filter). Is overridden by showOnlyTransactionsWithoutDepartment boolean.
prodCode|string|Product code. If blank, all products are returned (no filter).
projCode|string|Project code. If blank, all projects are returned (no filter).
includeSubProj|boolean|Include Sub-project(s) for specified project. If projectCode is null, all (sub)projects are included (regardless of this variable).
onlyNoDep|boolean|Show only transactions without department (same as selecting 'No Department' under Department-filter in UI).
options|[TrialBalanceLine](Type_TrialBalanceLine.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.TrialBalance.TrialBalanceLine&gt;|No|DataPage&lt;TrialBalanceLine&gt;.

### Request Signature
```http
GET /Reporting/TrialBalance/?date=<date>&depCode=<depCode>&prodCode=<prodCode>&projCode=<projCode>&includeSubProj=<includeSubProj>&onlyNoDep=<onlyNoDep>&options=<options> HTTP/1.1
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



