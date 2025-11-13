
public async Task&lt;GoApi.Documents.ClientDocument&gt; AddDocumentAsync(ClientDocument addDocumentRequest)
=======
**Namespace:** GoApi.Documents

Adds a new [ClientDocument](GoApi.Documents.ClientDocument.md) to a folder.         The API user must have full access to the containing folder.         Mandatory parameters are GoApi.Documents.ClientDocument.Base64EncodedData , GoApi.Documents.ClientDocumentListItem.ExternalReference , GoApi.Documents.ClientDocumentListItem.Filename and GoApi.Documents.ClientDocumentListItem.FolderId .         The ClientDocument.ExternalReference must be a unique string for all files for the given client. Max length is 50 characters.

### Syntax
```csharp
	public async Task<GoApi.Documents.ClientDocument> AddDocumentAsync(ClientDocument addDocumentRequest)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
addDocumentRequest|[ClientDocument](GoApi.Documents.ClientDocument.md)|The new file entity.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Documents.ClientDocument&gt;](GoApi.Documents.ClientDocument.md)|[ClientDocument](GoApi.Documents.ClientDocument.md)



