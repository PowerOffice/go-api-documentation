
GET Payroll/SalaryLine/?options=&lt;options&gt;
================

Gets a list of [SalaryLine](Type_SalaryLine.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Payroll/SalaryLine/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[SalaryLine](Type_SalaryLine.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Payroll.SalaryLine&gt;|No|DataPage&lt;salaryLine&gt;.

### Request Signature
```http
GET /Payroll/SalaryLine/?options=<options> HTTP/1.1
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
        "externalImportReference": string,
        "accountAgricultureDepartment": AgricultureDepartment,
        "oppositeAccountAgricultureDepartment": AgricultureDepartment
    }],
    "count": number,
    "success": boolean
}

```



