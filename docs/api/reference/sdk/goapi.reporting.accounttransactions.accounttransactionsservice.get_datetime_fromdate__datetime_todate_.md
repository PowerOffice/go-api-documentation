
public IQueryable&lt;GoApi.Reporting.AccountTransactions.AccountTransaction&gt; Get(DateTime fromDate, DateTime toDate)
=======
**Namespace:** GoApi.Reporting.AccountTransactions

Gets all the [AccountTransaction](GoApi.Reporting.AccountTransactions.AccountTransaction.md) in the specified date range (FromDate - ToDate).

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.AccountTransactions.AccountTransaction> Get(DateTime fromDate, DateTime toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromDate|DateTime|From date.
toDate|DateTime|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.AccountTransactions.AccountTransaction&gt;](GoApi.Reporting.AccountTransactions.AccountTransaction.md)|IQueryable&lt;AccountTransaction&gt;.



