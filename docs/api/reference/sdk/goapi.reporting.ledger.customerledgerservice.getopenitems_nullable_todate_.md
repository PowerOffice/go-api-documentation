
public IQueryable&lt;GoApi.Reporting.Ledger.CustomerLedgerEntry&gt; GetOpenItems(Nullable&lt;System.DateTime&gt; toDate)
=======
**Namespace:** GoApi.Reporting.Ledger

Gets the [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.Ledger.CustomerLedgerEntry> GetOpenItems(Nullable<System.DateTime> toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
toDate|System.Nullable&lt;System.DateTime&gt;|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.Ledger.CustomerLedgerEntry&gt;](GoApi.Reporting.Ledger.CustomerLedgerEntry.md)|IQueryable&lt;CustomerLedgerEntry&gt;.



