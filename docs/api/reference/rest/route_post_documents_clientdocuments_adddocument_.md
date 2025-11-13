
POST Documents/ClientDocuments/AddDocument/
================

Adds a new [ClientDocument](Type_ClientDocument.md) to a folder.         The API user must have full access to the containing folder.         Mandatory parameters are GoApi.Documents.ClientDocument.Base64EncodedData , GoApi.Documents.ClientDocumentListItem.ExternalReference , GoApi.Documents.ClientDocumentListItem.Filename and GoApi.Documents.ClientDocumentListItem.FolderId .         The ClientDocument.ExternalReference must be a unique string for all files for the given client. Max length is 50 characters.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/AddDocument/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ClientDocument](Type_ClientDocument.md)|No|The new file entity.

### Response Content
Type | Array | Description
:----|:------|:------------
[ClientDocument](Type_ClientDocument.md)|No|[ClientDocument](Type_ClientDocument.md)

### Request Signature
```http
POST /Documents/ClientDocuments/AddDocument/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "documentVersions": [{
        "documentId": number,
        "filename": string,
        "externalReference": string
    }],
    "base64EncodedData": string,
    "id": number,
    "filename": string,
    "folderId": number,
    "year": number,
    "period": Months,
    "externalReference": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "documentVersions": [{
            "documentId": number,
            "filename": string,
            "fileSize": number,
            "version": number,
            "externalReference": string
        }],
        "base64EncodedData": string,
        "id": number,
        "filename": string,
        "folderId": number,
        "year": number,
        "period": Months,
        "fileSize": number,
        "createdByUserId": string (Guid),
        "externalReference": string,
        "version": number
    },
    "success": boolean
}

```



