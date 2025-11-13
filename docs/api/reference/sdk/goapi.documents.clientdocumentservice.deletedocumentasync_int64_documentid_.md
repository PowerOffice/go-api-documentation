
public async Task&lt;System.bool&gt; DeleteDocumentAsync(long documentId)
=======
**Namespace:** GoApi.Documents

Deletes a [ClientDocument](GoApi.Documents.ClientDocument.md) . The API user must have full access to the [DocumentFolder](GoApi.Documents.DocumentFolder.md) which contains the file.         The API user must also be the creator of the file.

### Syntax
```csharp
	public async Task<System.bool> DeleteDocumentAsync(long documentId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
documentId|long|The document id.


### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.bool&gt;|bool



