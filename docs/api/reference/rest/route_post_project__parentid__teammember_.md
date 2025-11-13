
POST Project/{parentId}/TeamMember/
================

Creates or updates the specified [ProjectTeamMember](Type_ProjectTeamMember.md) .

### Url
```http
https://api.poweroffice.net/Project/{parentId}/TeamMember/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ProjectTeamMember](Type_ProjectTeamMember.md)|No|The project team member.

### Response Content
Type | Array | Description
:----|:------|:------------
[ProjectTeamMember](Type_ProjectTeamMember.md)|No|ProjectTeamMember.

### Request Signature
```http
POST /Project/{parentId}/TeamMember/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "employeeCode": number,
    "hourlyRate": number,
    "budgetHours": number
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
        "projectCode": string,
        "hourlyRate": number,
        "budgetHours": number
    },
    "success": boolean
}

```



