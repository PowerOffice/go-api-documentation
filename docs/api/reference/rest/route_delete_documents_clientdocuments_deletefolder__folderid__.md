
DELETE Documents/ClientDocuments/DeleteFolder/{folderId}/
================

Deletes the [DocumentFolder](Type_DocumentFolder.md) . The API user must have full access to the [DocumentFolder](Type_DocumentFolder.md) .         The API user must also be the creator of the folder.         The folder must be empty to be able to delete it.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/DeleteFolder/{folderId}/
```

### Http Verb

DELETE



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|bool

### Request Signature
```http
DELETE /Documents/ClientDocuments/DeleteFolder/{folderId}/ HTTP/1.1
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



