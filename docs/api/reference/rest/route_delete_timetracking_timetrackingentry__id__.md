
DELETE TimeTracking/TimeTrackingEntry/{id}/
================

Deletes the specified [TimeTrackingEntry](Type_TimeTrackingEntry.md) by its identifier.

### Url
```http
https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/{id}/
```

### Http Verb

DELETE



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Success.

### Request Signature
```http
DELETE /TimeTracking/TimeTrackingEntry/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "data": object,
        "success": boolean,
        "validation": {
            "errorLogReference": string,
            "summary": string,
            "exception": string,
            "exceptionDetails": object,
            "fields": IDictionary,
            "batchItemErrors": IBatchItemError[]
        },
        "count": number
    },
    "success": boolean
}

```



