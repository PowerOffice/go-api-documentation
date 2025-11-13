
GET Payroll/SalaryLine/
================

Gets a list of [SalaryLine](Type_SalaryLine.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Payroll/SalaryLine/
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
DataPage&lt;GoApi.Payroll.SalaryLine&gt;|No|DataPage&lt;salaryLine&gt;.

### Request Signature
```http
GET /Payroll/SalaryLine/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "employeeCode": number,
        "payItemCode": string,
        "quantity": number,
        "rate": number,
        "amount": number,
        "projectCode": string,
        "departmentCode": string,
        "account": number,
        "oppositeAccount": number,
        "comment": string,
        "isLocked": boolean,
        "isDeletedByUser": boolean,
        "vatCode": string,
        "carRegistrationNo": string,
        "externalImportReference": string
    }],
    "count": number,
    "success": boolean
}

```



