
public IEnumerable&lt;GoApi.Documents.ClientDocumentListItem&gt; GetDocumentListItems(long folderId)
=======
**Namespace:** GoApi.Documents

Gets a list of [ClientDocumentListItem](GoApi.Documents.ClientDocumentListItem.md) for a given folder.         This entity contains metadata for the document. To get the actual document, use GoApi.Documents.ClientDocumentService.GetDocument(System.Int64) .         The API user must have minimum Read access to the folder.

### Syntax
```csharp
	public IEnumerable<GoApi.Documents.ClientDocumentListItem> GetDocumentListItems(long folderId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
folderId|long|The folder id.


### Returns
Type | Description
:----|:------------
[IEnumerable&lt;GoApi.Documents.ClientDocumentListItem&gt;](GoApi.Documents.ClientDocumentListItem.md)|List of ClientDocumentListItem



