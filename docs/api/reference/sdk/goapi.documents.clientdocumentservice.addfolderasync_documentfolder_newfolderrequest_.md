
public async Task&lt;GoApi.Documents.DocumentFolder&gt; AddFolderAsync(DocumentFolder newFolderRequest)
=======
**Namespace:** GoApi.Documents

Adds a new folder below the folders specified with the GoApi.Documents.DocumentFolder.ParentFolderId .         The API user must have full access to the parent folder.         Mandatory parameters are GoApi.Documents.DocumentFolder.ParentFolderId , GoApi.Documents.DocumentFolder.Name and GoApi.Documents.DocumentFolder.ExternalReference .         The GoApi.Documents.DocumentFolder.ExternalReference must be a unique string for all folders for the given client. Max length is 50 characters.

### Syntax
```csharp
	public async Task<GoApi.Documents.DocumentFolder> AddFolderAsync(DocumentFolder newFolderRequest)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
newFolderRequest|[DocumentFolder](GoApi.Documents.DocumentFolder.md)|The new folder entity.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Documents.DocumentFolder&gt;](GoApi.Documents.DocumentFolder.md)|DocumentFolder.



