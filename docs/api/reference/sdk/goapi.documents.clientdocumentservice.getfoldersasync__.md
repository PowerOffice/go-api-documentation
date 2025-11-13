
public async Task&lt;System.Collections.Generic.IEnumerable&lt;GoApi.Documents.DocumentFolder&gt;&gt; GetFoldersAsync()
=======
**Namespace:** GoApi.Documents

Gets a flat list of available [DocumentFolder](GoApi.Documents.DocumentFolder.md) .         The folder without a GoApi.Documents.DocumentFolder.ParentFolderId is the root folder.         The API will have access to the folder named "Shared documents" and "My documents".         The API will also have access to folders below as long as the access privileges are not restricted from Go.         To build a tree structure, the GoApi.Documents.DocumentFolder.ParentFolderId must be used.

### Syntax
```csharp
	public async Task<System.Collections.Generic.IEnumerable<GoApi.Documents.DocumentFolder>> GetFoldersAsync()
```



### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.Collections.Generic.IEnumerable&lt;GoApi.Documents.DocumentFolder&gt;&gt;|



