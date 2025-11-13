
public async Task&lt;System.bool&gt; IsActiveDebtCollectionAsync()
=======
**Namespace:** GoApi.DebtCollection

Gets whether new debt collection cases can be created. If false, GoApi.DebtCollection.DebtCollectionService.GetAvailableInvoices and GoApi.DebtCollection.DebtCollectionService.CreateCase(GoApi.DebtCollection.DebtCollectionCase) will throw a SecurityException.

### Syntax
```csharp
	public async Task<System.bool> IsActiveDebtCollectionAsync()
```



### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.bool&gt;|Boolean



