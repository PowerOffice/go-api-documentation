
public IQueryable&lt;GoApi.Reporting.Ledger.CustomerLedgerEntry&gt; GetStatement(Nullable&lt;System.DateTime&gt; fromDate, Nullable&lt;System.DateTime&gt; toDate)
=======
**Namespace:** GoApi.Reporting.Ledger

Gets the [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) statement report between two dates. This includes open items and all entries that are already matched.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.Ledger.CustomerLedgerEntry> GetStatement(Nullable<System.DateTime> fromDate, Nullable<System.DateTime> toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromDate|System.Nullable&lt;System.DateTime&gt;|From date.
toDate|System.Nullable&lt;System.DateTime&gt;|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.Ledger.CustomerLedgerEntry&gt;](GoApi.Reporting.Ledger.CustomerLedgerEntry.md)|IQueryable&lt;CustomerLedgerEntry&gt;.



