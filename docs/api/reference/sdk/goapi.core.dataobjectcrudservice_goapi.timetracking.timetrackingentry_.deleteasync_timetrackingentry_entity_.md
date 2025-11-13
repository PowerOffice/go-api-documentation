
public async virtual Task&lt;System.bool&gt; DeleteAsync(TimeTrackingEntry entity)
=======
**Namespace:** GoApi.Core

Delete a data object

### Syntax
```csharp
	public async virtual Task<System.bool> DeleteAsync(TimeTrackingEntry entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[TimeTrackingEntry](GoApi.TimeTracking.TimeTrackingEntry.md)|The entity.


### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.bool&gt;|T.

### Exceptions
Type | Description
:----|:-----------
System.Exception|Entity must be of type DataObject     or     Key property of entity has illegal type



