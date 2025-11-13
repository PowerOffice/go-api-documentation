
GET Location/?options=&lt;options&gt;
================

Gets a list of locations filtered by odata query.

### Url
```http
https://api.poweroffice.net/Location/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Location](Type_Location.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Projects.Location&gt;|No|DataPage&lt;Location&gt;.

### Request Signature
```http
GET /Location/?options=<options> HTTP/1.1
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
        "isActive": boolean
    }],
    "count": number,
    "success": boolean
}

```



