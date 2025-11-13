
public async override Task&lt;GoApi.Import.Import&gt; SaveAsync(Import import)
=======
**Namespace:** GoApi.Import

Saves the provided [Import](GoApi.Import.Import.md) async.         This will upload the import to PowerOffice Go and users might manually post the imports there or the integration can do this through the GoApi.Import.ImportService.Post(GoApi.Import.Import,GoApi.Import.ImportPostOptions) method.

### Syntax
```csharp
	public async override Task<GoApi.Import.Import> SaveAsync(Import import)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
import|[Import](GoApi.Import.Import.md)|The import.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Import.Import&gt;](GoApi.Import.Import.md)|Import.



