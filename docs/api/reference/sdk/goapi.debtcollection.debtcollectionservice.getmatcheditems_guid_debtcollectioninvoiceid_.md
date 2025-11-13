
public IEnumerable&lt;GoApi.DebtCollection.DebtCollectionInvoiceMatch&gt; GetMatchedItems(Guid debtCollectionInvoiceId)
=======
**Namespace:** GoApi.DebtCollection

Gets all matched items on a debt collection invoice. This will contain all payments, creditnotes and manual vouchers that is matched with the customer subledger entry on the invoice.

### Syntax
```csharp
	public IEnumerable<GoApi.DebtCollection.DebtCollectionInvoiceMatch> GetMatchedItems(Guid debtCollectionInvoiceId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
debtCollectionInvoiceId|Guid|The debt collection invoice


### Returns
Type | Description
:----|:------------
[IEnumerable&lt;GoApi.DebtCollection.DebtCollectionInvoiceMatch&gt;](GoApi.DebtCollection.DebtCollectionInvoiceMatch.md)|IQueryable&lt;DebtCollectionInvoiceMatch&gt;



