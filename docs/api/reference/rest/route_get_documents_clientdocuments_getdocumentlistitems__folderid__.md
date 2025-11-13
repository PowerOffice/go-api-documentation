
GET Documents/ClientDocuments/GetDocumentListItems/{folderId}/
================

Gets a list of [ClientDocumentListItem](Type_ClientDocumentListItem.md) for a given folder.         This entity contains metadata for the document. To get the actual document, use Go.Web.ExternalApi.Controllers.Documents.ClientDocumentsController.GetDocument(System.Int64) .         The API user must have minimum Read access to the folder.

### Url
```http
https://api.poweroffice.net/Documents/ClientDocuments/GetDocumentListItems/{folderId}/
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
[ClientDocumentListItem[]](Type_ClientDocumentListItem.md)|No|List of ClientDocumentListItem

### Request Signature
```http
GET /Documents/ClientDocuments/GetDocumentListItems/{folderId}/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": ClientDocumentListItem[],
    "success": boolean
}

```



