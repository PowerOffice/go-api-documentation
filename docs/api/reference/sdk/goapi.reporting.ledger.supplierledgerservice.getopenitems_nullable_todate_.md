
public IQueryable&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt; GetOpenItems(Nullable&lt;System.DateTime&gt; toDate)
=======
**Namespace:** GoApi.Reporting.Ledger

Gets the [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.Ledger.SupplierLedgerEntry> GetOpenItems(Nullable<System.DateTime> toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
toDate|System.Nullable&lt;System.DateTime&gt;|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt;](GoApi.Reporting.Ledger.SupplierLedgerEntry.md)|IQueryable&lt;SupplierLedgerEntry&gt;.



