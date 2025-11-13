
POST Documents/ClientDocuments/RenameFolder/
================

Renames a folder. The API user must have full access to the folder.         The API user must be the creator of the folder.         Mandatory parameters are GoApi.Documents.DocumentFolder.Id and GoApi.Documents.DocumentFolder.Name .

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/RenameFolder/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[DocumentFolder](Type_DocumentFolder.md)|No|The rename request.

### Response Content
Type | Array | Description
:----|:------|:------------
[DocumentFolder](Type_DocumentFolder.md)|No|DocumentFolder.

### Request Signature
```http
POST /Documents/ClientDocuments/RenameFolder/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "name": string,
    "parentFolderId": number,
    "externalReference": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "name": string,
        "parentFolderId": number,
        "externalReference": string,
        "hasWriteAccess": boolean
    },
    "success": boolean
}

```



