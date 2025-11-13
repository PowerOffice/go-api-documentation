
public async virtual Task&lt;bool&gt; DeleteAsync(Product entity)
=======
**Namespace:** GoApi.Core

Delete a data object

### Syntax
```csharp
	public async virtual Task<bool> DeleteAsync(Product entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[Product](GoApi.Products.Product.md)|The entity.


### Returns
Type | Description
:----|:------------
Task&lt;bool&gt;|T.

### Exceptions
Type | Description
:----|:-----------
System.Exception|Entity must be of type DataObject     or     Key property of entity has illegal type



