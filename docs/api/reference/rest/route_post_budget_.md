
POST Budget/
================

Creates the specified budget.

### Url
```http
https://api.poweroffice.net/Budget/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Budget](Type_Budget.md)|No|The Budget.

### Response Content
Type | Array | Description
:----|:------|:------------
[Budget](Type_Budget.md)|No|Budget.

### Request Signature
```http
POST /Budget/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": string (Guid),
    "name": string,
    "managerCode": number,
    "departmentCode": string,
    "year": number,
    "budgetLineItems": [{
        "accountCode": number,
        "month": number,
        "amount": number,
        "year": number,
        "accountAgricultureDepartment": AgricultureDepartment
    }]
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": string (Guid),
        "name": string,
        "managerCode": number,
        "managerName": string,
        "departmentCode": string,
        "departmentName": string,
        "year": number,
        "startDate": Date,
        "endDate": Date,
        "budgetLineItems": [{
            "accountCode": number,
            "accountName": string,
            "month": number,
            "amount": number,
            "year": number,
            "accountAgricultureDepartment": AgricultureDepartment
        }]
    },
    "success": boolean
}

```



