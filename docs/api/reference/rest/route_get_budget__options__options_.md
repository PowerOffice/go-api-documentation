
GET Budget/?options=&lt;options&gt;
================

Gets a list of budgets filtered by odata query.

### Url
```http
https://api.poweroffice.net/Budget/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Budget](Type_Budget.md)|The odata options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Budget.Budget&gt;|No|DataPage&lt;Budget&gt;.

### Request Signature
```http
GET /Budget/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



