
POST Documents/ClientDocuments/AddFolder/
================

Adds a new folder.     Folder will be added to folder specified by parentFolderId. If no parent folder is specified, folder will be added to "Shared documents"     The ExternalReference must be provided and unique.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/AddFolder/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[DocumentFolder](Type_DocumentFolder.md)|No|The request.

### Response Content
Type | Array | Description
:----|:------|:------------
[DocumentFolder](Type_DocumentFolder.md)|No|DocumentFolder

### Request Signature
```http
POST /Documents/ClientDocuments/AddFolder/ HTTP/1.1
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



