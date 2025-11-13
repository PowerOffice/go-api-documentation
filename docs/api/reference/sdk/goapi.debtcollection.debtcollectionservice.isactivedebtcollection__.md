
public bool IsActiveDebtCollection()
=======
**Namespace:** GoApi.DebtCollection

Gets whether new debt collection cases can be created. If false, GoApi.DebtCollection.DebtCollectionService.GetAvailableInvoices and GoApi.DebtCollection.DebtCollectionService.CreateCase(GoApi.DebtCollection.DebtCollectionCase) will throw a SecurityException.

### Syntax
```csharp
	public bool IsActiveDebtCollection()
```



### Returns
Type | Description
:----|:------------
bool|Boolean



