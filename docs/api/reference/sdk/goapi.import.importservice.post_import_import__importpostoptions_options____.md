
public Import Post(Import import, ImportPostOptions options = )
=======
**Namespace:** GoApi.Import

Imports the previously uploaded [Import](GoApi.Import.Import.md) on the client.

### Syntax
```csharp
	public Import Post(Import import, ImportPostOptions options = )
```

### Parameters
Name | Type | Description
:----|:-----|:------------
import|[Import](GoApi.Import.Import.md)|The journal.
options|[ImportPostOptions](GoApi.Import.ImportPostOptions.md)|The options.


### Returns
Type | Description
:----|:------------
[Import](GoApi.Import.Import.md)|Import

### Exceptions
Type | Description
:----|:-----------
GoApi.Core.ApiValidationException|Post operation has failed

GoApi.Core.ValidationInfo|Validation error

GoApi.Core.ApiException|Post operation timed out


### Remarks
The journal must already be saved (ie. [Import](GoApi.Import.Import.md) /&gt; has been assigned).     The journal instance only needs the Id to be set when calling this method, as the saved journal will be loaded     server side, and posted.


