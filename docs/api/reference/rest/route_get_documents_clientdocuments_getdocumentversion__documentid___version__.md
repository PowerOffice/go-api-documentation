
GET Documents/ClientDocuments/GetDocumentVersion/{documentId}/{version}/
================

Gets a specific [ClientDocument](Type_ClientDocument.md) version with the actual document as Base64 encoded string.         The API user must have minimum Read access to the containing folder.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/GetDocumentVersion/{documentId}/{version}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[DocumentVersion](Type_DocumentVersion.md)|No|ClientDocument

### Request Signature
```http
GET /Documents/ClientDocuments/GetDocumentVersion/{documentId}/{version}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "base64EncodedData": string,
        "documentId": number,
        "filename": string,
        "fileSize": number,
        "version": number,
        "externalReference": string
    },
    "success": boolean
}

```



