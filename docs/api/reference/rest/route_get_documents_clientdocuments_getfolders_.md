
GET Documents/ClientDocuments/GetFolders/
================

Gets a flat list of available [DocumentFolder](Type_DocumentFolder.md) .         The folder without a GoApi.Documents.DocumentFolder.ParentFolderId is the root folder.         The API will have access to the folder named "Shared documents" and "My documents".         The API will also have access to folders below as long as the access privileges are not restricted from Go.         To build a tree structure, the GoApi.Documents.DocumentFolder.ParentFolderId must be used.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/GetFolders/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[DocumentFolder[]](Type_DocumentFolder.md)|No|

### Request Signature
```http
GET /Documents/ClientDocuments/GetFolders/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": DocumentFolder[],
    "success": boolean
}

```



