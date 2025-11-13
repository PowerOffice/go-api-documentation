
GET Reporting/TrialBalance/?date=&lt;date&gt;&options=&lt;options&gt;
================

Get the trial balance as at a specified date.

### Url
```http
https://api.poweroffice.net/Reporting/TrialBalance/?date=<date>&options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
date|Date|The date.
options|[TrialBalanceLine](Type_TrialBalanceLine.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.TrialBalance.TrialBalanceLine&gt;|No|DataPage&lt;TrialBalanceLine&gt;.

### Request Signature
```http
GET /Reporting/TrialBalance/?date=<date>&options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "accountCode": number,
        "agricultureDepartment": AgricultureDepartment,
        "accountName": string,
        "balance": number,
        "budget": number
    }],
    "count": number,
    "success": boolean
}

```



