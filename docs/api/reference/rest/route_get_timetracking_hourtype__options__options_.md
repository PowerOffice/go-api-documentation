
GET TimeTracking/HourType/?options=&lt;options&gt;
================

Gets a list of [HourType](Type_HourType.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/TimeTracking/HourType/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[HourType](Type_HourType.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.TimeTracking.HourType&gt;|No|DataPage&lt;HourType&gt;.

### Request Signature
```http
GET /TimeTracking/HourType/?options=<options> HTTP/1.1
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



