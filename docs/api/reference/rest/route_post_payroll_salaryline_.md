
POST Payroll/SalaryLine/
================

Creates or updates the specified [SalaryLine](Type_SalaryLine.md) .

### Url
```http
https://api.poweroffice.net/Payroll/SalaryLine/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[SalaryLine](Type_SalaryLine.md)|No|The salaryLine.

### Response Content
Type | Array | Description
:----|:------|:------------
[SalaryLine](Type_SalaryLine.md)|No|salaryLine.

### Request Signature
```http
POST /Payroll/SalaryLine/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
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
    "vatCode": string,
    "carRegistrationNo": string,
    "externalImportReference": string,
    "accountAgricultureDepartment": AgricultureDepartment,
    "oppositeAccountAgricultureDepartment": AgricultureDepartment
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



