
DELETE Quality/QualityDocumentation/DeleteDocument/{id}/
================

Delete a specific document.

### Url
```http
https://api.poweroffice.net/Quality/QualityDocumentation/DeleteDocument/{id}/
```

### Http Verb

DELETE



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Delete success

### Request Signature
```http
DELETE /Quality/QualityDocumentation/DeleteDocument/{id}/ HTTP/1.1
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



