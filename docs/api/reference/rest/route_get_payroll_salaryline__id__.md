
GET Payroll/SalaryLine/{id}/
================

Gets the specified [SalaryLine](Type_SalaryLine.md) by its identifier.

### Url
```http
https://api.poweroffice.net/Payroll/SalaryLine/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[SalaryLine](Type_SalaryLine.md)|No|salaryLine.

### Request Signature
```http
GET /Payroll/SalaryLine/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



