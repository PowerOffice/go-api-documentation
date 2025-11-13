
GET TimeTracking/HourType/
================

Gets a list of [HourType](Type_HourType.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/TimeTracking/HourType/
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
DataPage&lt;GoApi.TimeTracking.HourType&gt;|No|DataPage&lt;HourType&gt;.

### Request Signature
```http
GET /TimeTracking/HourType/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "description": string,
        "payItemCode": string,
        "flexTimeFactor": number,
        "costPriceFactor": number,
        "isActive": boolean,
        "lastChanged": Date
    }],
    "count": number,
    "success": boolean
}

```



