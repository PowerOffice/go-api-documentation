
public async Task&lt;GoApi.Documents.ClientDocument&gt; GetDocumentAsync(long documentId)
=======
**Namespace:** GoApi.Documents

Gets a [ClientDocument](GoApi.Documents.ClientDocument.md) with the actual document as Base64 encoded string.         The API user must have minimum Read access to the containing folder.

### Syntax
```csharp
	public async Task<GoApi.Documents.ClientDocument> GetDocumentAsync(long documentId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
documentId|long|The document id.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Documents.ClientDocument&gt;](GoApi.Documents.ClientDocument.md)|ClientDocument



