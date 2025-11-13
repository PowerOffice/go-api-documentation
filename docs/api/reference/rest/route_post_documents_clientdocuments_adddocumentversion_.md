
POST Documents/ClientDocuments/AddDocumentVersion/
================

Adds a new version of [ClientDocument](Type_ClientDocument.md) .         The API user must have full access to the containing folder.         Mandatory parameters are ClientDocument.Id , GoApi.Documents.ClientDocument.Base64EncodedData , GoApi.Documents.ClientDocumentListItem.ExternalReference , GoApi.Documents.ClientDocumentListItem.Filename and GoApi.Documents.ClientDocumentListItem.FolderId .         The ClientDocument.Id must be an Id to a current (latest version) document.         The ClientDocument.ExternalReference must be a unique string for all files for the given client. Max length is 50 characters.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/AddDocumentVersion/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[DocumentVersion](Type_DocumentVersion.md)|No|

### Response Content
Type | Array | Description
:----|:------|:------------
[DocumentVersion](Type_DocumentVersion.md)|No|

### Request Signature
```http
POST /Documents/ClientDocuments/AddDocumentVersion/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "base64EncodedData": string,
    "documentId": number,
    "filename": string,
    "externalReference": string
}

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



