
GET TimeTracking/HourType/{id}/
================

Gets the specified [HourType](Type_HourType.md) by its identifier.

### Url
```http
https://api.poweroffice.net/TimeTracking/HourType/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[HourType](Type_HourType.md)|No|HourType.

### Request Signature
```http
GET /TimeTracking/HourType/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "description": string,
        "payItemCode": string,
        "flexTimeFactor": number,
        "costPriceFactor": number,
        "isActive": boolean,
        "lastChanged": Date
    },
    "success": boolean
}

```



