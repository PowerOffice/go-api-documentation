
public bool DeleteDocument(long documentId)
=======
**Namespace:** GoApi.Documents

Deletes a [ClientDocument](GoApi.Documents.ClientDocument.md) . The API user must have full access to the [DocumentFolder](GoApi.Documents.DocumentFolder.md) which contains the file.         The API user must also be the creator of the file.

### Syntax
```csharp
	public bool DeleteDocument(long documentId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
documentId|long|The document id.


### Returns
Type | Description
:----|:------------
bool|bool



