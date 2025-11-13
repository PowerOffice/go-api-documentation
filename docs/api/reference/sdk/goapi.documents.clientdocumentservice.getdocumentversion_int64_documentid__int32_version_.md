
public DocumentVersion GetDocumentVersion(long documentId, int version)
=======
**Namespace:** GoApi.Documents

Gets a specific [ClientDocument](GoApi.Documents.ClientDocument.md) version with the actual document as Base64 encoded string.         The API user must have minimum Read access to the containing folder.

### Syntax
```csharp
	public DocumentVersion GetDocumentVersion(long documentId, int version)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
documentId|long|The id of the current (latest version) of the document.
version|int|The document version requested.


### Returns
Type | Description
:----|:------------
[DocumentVersion](GoApi.Documents.DocumentVersion.md)|ClientDocument



