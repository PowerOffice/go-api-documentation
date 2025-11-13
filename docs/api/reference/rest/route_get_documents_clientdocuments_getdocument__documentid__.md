
GET Documents/ClientDocuments/GetDocument/{documentId}/
================

Gets a [ClientDocument](Type_ClientDocument.md) with the actual document as Base64 encoded string.         The API user must have minimum Read access to the containing folder.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/GetDocument/{documentId}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[ClientDocument](Type_ClientDocument.md)|No|ClientDocument

### Request Signature
```http
GET /Documents/ClientDocuments/GetDocument/{documentId}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



