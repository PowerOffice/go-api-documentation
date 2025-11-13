
POST Quality/QualityDocumentation/UploadDocument/
================

Uploads and connects a document to an assignment agreement.

### Url
```http
https://api.poweroffice.net/Quality/QualityDocumentation/UploadDocument/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[QualityDocumentUpload](Type_QualityDocumentUpload.md)|No|

### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Upload success

### Request Signature
```http
POST /Quality/QualityDocumentation/UploadDocument/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "entityId": number,
    "period": Months,
    "year": number,
    "entityType": DocumentEntityType,
    "subContextType": DocumentSubContextType,
    "folderType": QualityAgreementSystemFolderType,
    "fileName": string,
    "base64EncodedData": string
}

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



