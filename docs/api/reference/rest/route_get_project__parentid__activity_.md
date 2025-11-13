
GET Project/{parentId}/Activity/
================

Gets a list of [ProjectActivity](Type_ProjectActivity.md) filtered by odata query for a given parent identifier ( [Project](Type_Project.md) ).

### Url
```http
https://api.poweroffice.net/Project/{parentId}/Activity/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Projects.ProjectActivity&gt;|No|DataPage&lt;ProjectActivity&gt;.

### Request Signature
```http
GET /Project/{parentId}/Activity/?$filter=<ODataFilter> HTTP/1.1
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



