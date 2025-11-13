
public async virtual Task&lt;System.bool&gt; DeleteAsync(Guid entityId)
=======
**Namespace:** GoApi.DebtCollection

Deletes the [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) specified by Guid .         This call should be used if the debt collection agency rejects the case.

### Syntax
```csharp
	public async virtual Task<System.bool> DeleteAsync(Guid entityId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entityId|Guid|


### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.bool&gt;|bool



