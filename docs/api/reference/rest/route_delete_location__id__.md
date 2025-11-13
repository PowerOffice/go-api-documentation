
DELETE Location/{id}/
================

Deletes the specified location by it's id.

### Url
```http
https://api.poweroffice.net/Location/{id}/
```

### Http Verb

DELETE



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Success.

### Request Signature
```http
DELETE /Location/{id}/ HTTP/1.1
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



