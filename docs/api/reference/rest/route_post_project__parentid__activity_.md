
POST Project/{parentId}/Activity/
================

Creates or updates the specified [ProjectActivity](Type_ProjectActivity.md) .

### Url
```http
https://api.poweroffice.net/Project/{parentId}/Activity/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ProjectActivity](Type_ProjectActivity.md)|No|The project activity.

### Response Content
Type | Array | Description
:----|:------|:------------
[ProjectActivity](Type_ProjectActivity.md)|No|ProjectActivity.

### Request Signature
```http
POST /Project/{parentId}/Activity/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "activityCode": string,
    "isBillable": boolean,
    "hourlyRate": number
}

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



