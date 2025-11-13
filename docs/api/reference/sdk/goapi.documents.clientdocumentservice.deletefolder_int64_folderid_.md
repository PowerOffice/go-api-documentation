
public bool DeleteFolder(long folderId)
=======
**Namespace:** GoApi.Documents

Deletes the [DocumentFolder](GoApi.Documents.DocumentFolder.md) . The API user must have full access to the [DocumentFolder](GoApi.Documents.DocumentFolder.md) .         The API user must also be the creator of the folder.         The  folder must be empty to be able to delete it.

### Syntax
```csharp
	public bool DeleteFolder(long folderId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
folderId|long|The folder id.


### Returns
Type | Description
:----|:------------
bool|bool



