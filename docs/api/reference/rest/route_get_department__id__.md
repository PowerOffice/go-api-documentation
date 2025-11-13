
GET Department/{id}/
================

Gets the specified department by it's id.

### Url
```http
https://api.poweroffice.net/Department/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[Department](Type_Department.md)|No|Department.

### Request Signature
```http
GET /Department/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



