
public IEnumerable&lt;GoApi.DebtCollection.DebtCollectionCaseWithMatches&gt; GetAllMatchedItems(DateTimeOffset fromDateTime)
=======
**Namespace:** GoApi.DebtCollection

Gets all matched items for all debt collection invoices with last changed date later than given date and time. This will contain all payments, creditnotes and manual vouchers that is matched with the customer subledger entry on the invoices.     Only outgoing invoices with which is a debt collection case or has debt collection status other than "None" or "Draft" is returned, with corresponding matches.

### Syntax
```csharp
	public IEnumerable<GoApi.DebtCollection.DebtCollectionCaseWithMatches> GetAllMatchedItems(DateTimeOffset fromDateTime)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromDateTime|DateTimeOffset|The from date and time


### Returns
Type | Description
:----|:------------
[IEnumerable&lt;GoApi.DebtCollection.DebtCollectionCaseWithMatches&gt;](GoApi.DebtCollection.DebtCollectionCaseWithMatches.md)|IQueryable&lt;DebtCollectionCaseWithMatches&gt;



