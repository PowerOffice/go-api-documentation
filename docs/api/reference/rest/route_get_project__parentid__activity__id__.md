
GET Project/{parentId}/Activity/{id}/
================

Gets the specified [ProjectActivity](Type_ProjectActivity.md) by its id and its parent identifier ( [Project](Type_Project.md) ).

### Url
```http
https://api.poweroffice.net/Project/{parentId}/Activity/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ProjectActivity](Type_ProjectActivity.md)|No|ProjectActivity.

### Request Signature
```http
GET /Project/{parentId}/Activity/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "activityCode": string,
        "projectCode": string,
        "isBillable": boolean,
        "hourlyRate": number,
        "name": string
    },
    "success": boolean
}

```



