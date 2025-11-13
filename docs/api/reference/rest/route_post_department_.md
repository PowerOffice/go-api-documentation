
POST Department/
================

Creates or updates the specified department.

### Url
```http
https://api.poweroffice.net/Department/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Department](Type_Department.md)|No|The department.

### Response Content
Type | Array | Description
:----|:------|:------------
[Department](Type_Department.md)|No|Department.

### Request Signature
```http
POST /Department/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "name": string,
    "code": string,
    "managerCode": number,
    "isActive": boolean
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "name": string,
        "code": string,
        "managerCode": number,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid)
    },
    "success": boolean
}

```



