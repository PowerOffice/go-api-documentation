
public IQueryable&lt;AccountTransaction&gt; Get(int accountCode, DateTime fromDate, DateTime toDate)
=======
**Namespace:** GoApi.Reporting.AccountTransactions

Gets the transaction on an account in the specified date range

### Syntax
```csharp
	public IQueryable<AccountTransaction> Get(int accountCode, DateTime fromDate, DateTime toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
accountCode|int|The account code.
fromDate|DateTime|From date.
toDate|DateTime|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;AccountTransaction&gt;](GoApi.Reporting.AccountTransactions.AccountTransaction.md)|IQueryable&lt;AccountTransaction&gt;.



