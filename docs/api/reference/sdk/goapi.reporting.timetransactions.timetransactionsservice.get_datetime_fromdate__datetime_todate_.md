
public IQueryable&lt;GoApi.Reporting.TimeTransactions.TimeTransaction&gt; Get(DateTime fromDate, DateTime toDate)
=======
**Namespace:** GoApi.Reporting.TimeTransactions

Gets all the [TimeTransaction](GoApi.Reporting.TimeTransactions.TimeTransaction.md) in the specified date range (FromDate - ToDate).

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.TimeTransactions.TimeTransaction> Get(DateTime fromDate, DateTime toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromDate|DateTime|From date.
toDate|DateTime|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.TimeTransactions.TimeTransaction&gt;](GoApi.Reporting.TimeTransactions.TimeTransaction.md)|IQueryable&lt;TimeTransaction&gt;.



