
GET ProjectActivity/{id}/
================

Gets the specified [ProjectActivity](Type_ProjectActivity.md) by its id.

### Url
```http
https://api.poweroffice.net/ProjectActivity/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ProjectActivity](Type_ProjectActivity.md)|No|ProjectActivity.

### Request Signature
```http
GET /ProjectActivity/{id}/ HTTP/1.1
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



