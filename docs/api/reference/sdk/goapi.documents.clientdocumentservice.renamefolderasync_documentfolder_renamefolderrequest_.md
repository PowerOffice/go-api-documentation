
public async Task&lt;GoApi.Documents.DocumentFolder&gt; RenameFolderAsync(DocumentFolder renameFolderRequest)
=======
**Namespace:** GoApi.Documents

Renames a folder. The API user must have full access to the folder.         The API user must be the creator of the folder.         Mandatory parameters are GoApi.Documents.DocumentFolder.Id and GoApi.Documents.DocumentFolder.Name .

### Syntax
```csharp
	public async Task<GoApi.Documents.DocumentFolder> RenameFolderAsync(DocumentFolder renameFolderRequest)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
renameFolderRequest|[DocumentFolder](GoApi.Documents.DocumentFolder.md)|The rename request.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Documents.DocumentFolder&gt;](GoApi.Documents.DocumentFolder.md)|DocumentFolder.



