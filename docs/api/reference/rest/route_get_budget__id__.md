
GET Budget/{id}/
================

Gets the specified budget by its id.

### Url
```http
https://api.poweroffice.net/Budget/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[Budget](Type_Budget.md)|No|Budget.

### Request Signature
```http
GET /Budget/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



