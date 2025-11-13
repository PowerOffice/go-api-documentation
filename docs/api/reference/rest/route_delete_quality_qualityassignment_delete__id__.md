
DELETE Quality/QualityAssignment/Delete/{id}/
================

Delete an [AssignmentAgreement](Type_AssignmentAgreement.md) .

### Url
```http
https://api.poweroffice.net/Quality/QualityAssignment/Delete/{id}/
```

### Http Verb

DELETE



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|AssignmentAgreement delete success.

### Request Signature
```http
DELETE /Quality/QualityAssignment/Delete/{id}/ HTTP/1.1
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



