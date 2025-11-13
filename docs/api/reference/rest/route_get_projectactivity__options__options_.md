
GET ProjectActivity/?options=&lt;options&gt;
================

Gets a list of [ProjectActivity](Type_ProjectActivity.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/ProjectActivity/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ProjectActivity](Type_ProjectActivity.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Projects.ProjectActivity&gt;|No|DataPage&lt;ProjectActivity&gt;.

### Request Signature
```http
GET /ProjectActivity/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "activityCode": string,
        "projectCode": string,
        "isBillable": boolean,
        "hourlyRate": number,
        "name": string
    }],
    "count": number,
    "success": boolean
}

```



