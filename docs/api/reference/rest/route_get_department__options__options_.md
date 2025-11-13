
GET Department/?options=&lt;options&gt;
================

Gets a list of departments filtered by odata query.

### Url
```http
https://api.poweroffice.net/Department/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Department](Type_Department.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Dimension.Department&gt;|No|DataPage&lt;Department&gt;.

### Request Signature
```http
GET /Department/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "name": string,
        "code": string,
        "managerCode": number,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid)
    }],
    "count": number,
    "success": boolean
}

```



