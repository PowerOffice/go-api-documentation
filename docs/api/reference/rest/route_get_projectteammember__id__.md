
GET ProjectTeamMember/{id}/
================

Gets the specified [ProjectTeamMember](Type_ProjectTeamMember.md) by its id.

### Url
```http
https://api.poweroffice.net/ProjectTeamMember/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ProjectTeamMember](Type_ProjectTeamMember.md)|No|ProjectTeamMember.

### Request Signature
```http
GET /ProjectTeamMember/{id}/ HTTP/1.1
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
        "projectCode": string,
        "hourlyRate": number,
        "budgetHours": number
    },
    "success": boolean
}

```



