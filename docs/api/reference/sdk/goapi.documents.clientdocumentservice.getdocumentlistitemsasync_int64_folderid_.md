
public async Task&lt;System.Collections.Generic.IEnumerable&lt;GoApi.Documents.ClientDocumentListItem&gt;&gt; GetDocumentListItemsAsync(long folderId)
=======
**Namespace:** GoApi.Documents

Gets a list of [ClientDocumentListItem](GoApi.Documents.ClientDocumentListItem.md) for a given folder.         This entity contains metadata for the document. To get the actual document, use GoApi.Documents.ClientDocumentService.GetDocument(System.Int64) .         The API user must have minimum Read access to the folder.

### Syntax
```csharp
	public async Task<System.Collections.Generic.IEnumerable<GoApi.Documents.ClientDocumentListItem>> GetDocumentListItemsAsync(long folderId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
folderId|long|The folder id.


### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.Collections.Generic.IEnumerable&lt;GoApi.Documents.ClientDocumentListItem&gt;&gt;|List of ClientDocumentListItem



