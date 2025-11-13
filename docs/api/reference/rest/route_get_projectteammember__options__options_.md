
GET ProjectTeamMember/?options=&lt;options&gt;
================

Gets a list of [ProjectTeamMember](Type_ProjectTeamMember.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ProjectTeamMember/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ProjectTeamMember](Type_ProjectTeamMember.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Projects.ProjectTeamMember&gt;|No|DataPage&lt;ProjectTeamMember&gt;.

### Request Signature
```http
GET /ProjectTeamMember/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "employeeCode": number,
        "projectCode": string,
        "hourlyRate": number,
        "budgetHours": number
    }],
    "count": number,
    "success": boolean
}

```



