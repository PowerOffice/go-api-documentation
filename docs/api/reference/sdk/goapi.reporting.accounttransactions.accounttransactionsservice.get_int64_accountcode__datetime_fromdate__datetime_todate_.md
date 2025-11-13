
public IQueryable&lt;GoApi.Reporting.AccountTransactions.AccountTransaction&gt; Get(long accountCode, DateTime fromDate, DateTime toDate)
=======
**Namespace:** GoApi.Reporting.AccountTransactions

Gets all the [AccountTransaction](GoApi.Reporting.AccountTransactions.AccountTransaction.md) on a given [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) by its account code in the specified date range (FromDate - ToDate).

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.AccountTransactions.AccountTransaction> Get(long accountCode, DateTime fromDate, DateTime toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
accountCode|long|The account code.
fromDate|DateTime|From date.
toDate|DateTime|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.AccountTransactions.AccountTransaction&gt;](GoApi.Reporting.AccountTransactions.AccountTransaction.md)|IQueryable&lt;AccountTransaction&gt;.



