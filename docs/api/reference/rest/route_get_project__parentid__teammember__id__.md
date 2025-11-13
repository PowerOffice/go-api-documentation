
GET Project/{parentId}/TeamMember/{id}/
================

Gets the specified [ProjectTeamMember](Type_ProjectTeamMember.md) by its id and its parent identifier ( [Project](Type_Project.md) ).

### Url
```http
https://api.poweroffice.net/Project/{parentId}/TeamMember/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ProjectTeamMember](Type_ProjectTeamMember.md)|No|ProjectTeamMember.

### Request Signature
```http
GET /Project/{parentId}/TeamMember/{id}/ HTTP/1.1
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



