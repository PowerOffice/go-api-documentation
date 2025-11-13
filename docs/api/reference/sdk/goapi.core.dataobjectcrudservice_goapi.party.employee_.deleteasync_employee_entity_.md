
public async virtual Task&lt;System.bool&gt; DeleteAsync(Employee entity)
=======
**Namespace:** GoApi.Core

Delete a data object

### Syntax
```csharp
	public async virtual Task<System.bool> DeleteAsync(Employee entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[Employee](GoApi.Party.Employee.md)|The entity.


### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.bool&gt;|T.

### Exceptions
Type | Description
:----|:-----------
System.Exception|Entity must be of type DataObject     or     Key property of entity has illegal type



