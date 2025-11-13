
DELETE Documents/ClientDocuments/DeleteDocument/{documentId}/
================

Deletes a [ClientDocument](Type_ClientDocument.md) . The API user must have full access to the [DocumentFolder](Type_DocumentFolder.md) which contains the file.         The API user must also be the creator of the file.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/DeleteDocument/{documentId}/
```

### Http Verb

DELETE



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|bool

### Request Signature
```http
DELETE /Documents/ClientDocuments/DeleteDocument/{documentId}/ HTTP/1.1
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



