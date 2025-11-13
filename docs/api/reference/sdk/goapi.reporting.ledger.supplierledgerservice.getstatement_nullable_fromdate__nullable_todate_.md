
public IQueryable&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt; GetStatement(Nullable&lt;System.DateTime&gt; fromDate, Nullable&lt;System.DateTime&gt; toDate)
=======
**Namespace:** GoApi.Reporting.Ledger

Gets the [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) statement report between two dates. This includes open items and all entries that are already matched.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.Ledger.SupplierLedgerEntry> GetStatement(Nullable<System.DateTime> fromDate, Nullable<System.DateTime> toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromDate|System.Nullable&lt;System.DateTime&gt;|From date.
toDate|System.Nullable&lt;System.DateTime&gt;|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt;](GoApi.Reporting.Ledger.SupplierLedgerEntry.md)|IQueryable&lt;SupplierLedgerEntry&gt;.



