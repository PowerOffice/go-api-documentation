
public async Task&lt;GoApi.Documents.DocumentVersion&gt; AddDocumentVersionAsync(DocumentVersion addDocumentVersionRequest)
=======
**Namespace:** GoApi.Documents

Adds a new version of [ClientDocument](GoApi.Documents.ClientDocument.md) .         The API user must have full access to the containing folder.         Mandatory parameters are ClientDocument.Id , GoApi.Documents.ClientDocument.Base64EncodedData , GoApi.Documents.ClientDocumentListItem.ExternalReference , GoApi.Documents.ClientDocumentListItem.Filename and GoApi.Documents.ClientDocumentListItem.FolderId .         The ClientDocument.Id must be an Id to a current (latest version) document.         The ClientDocument.ExternalReference must be a unique string for all files for the given client. Max length is 50 characters.

### Syntax
```csharp
	public async Task<GoApi.Documents.DocumentVersion> AddDocumentVersionAsync(DocumentVersion addDocumentVersionRequest)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
addDocumentVersionRequest|[DocumentVersion](GoApi.Documents.DocumentVersion.md)|


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Documents.DocumentVersion&gt;](GoApi.Documents.DocumentVersion.md)|



