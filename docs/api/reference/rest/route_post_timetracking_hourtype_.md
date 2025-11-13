
POST TimeTracking/HourType/
================

Creates or updates the specified [HourType](Type_HourType.md) .

### Url
```http
https://api.poweroffice.net/TimeTracking/HourType/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[HourType](Type_HourType.md)|No|The HourType.

### Response Content
Type | Array | Description
:----|:------|:------------
[HourType](Type_HourType.md)|No|HourType.

### Request Signature
```http
POST /TimeTracking/HourType/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "description": string,
    "payItemCode": string,
    "flexTimeFactor": number,
    "costPriceFactor": number,
    "isActive": boolean
}

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



