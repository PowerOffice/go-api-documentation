
public IQueryable&lt;GoApi.Reporting.Ledger.SupplierBalance&gt; Get(Nullable&lt;System.DateTime&gt; toDate = , string contactGroup = , Nullable&lt;System.Guid&gt; subledgerNumberSeriesId = , Nullable&lt;System.bool&gt; includeOnlyOpenItems = )
=======
**Namespace:** GoApi.Reporting.Ledger

Gets the balance at the specified date for active suppliers.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.Ledger.SupplierBalance> Get(Nullable<System.DateTime> toDate = , string contactGroup = , Nullable<System.Guid> subledgerNumberSeriesId = , Nullable<System.bool> includeOnlyOpenItems = )
```

### Parameters
Name | Type | Description
:----|:-----|:------------
toDate|System.Nullable&lt;System.DateTime&gt;|To date. If null, defaults to DateTime.Now.
contactGroup|string|The Contact Group supplier is part of.
subledgerNumberSeriesId|System.Nullable&lt;System.Guid&gt;|The Sub Ledger Number Series the supplier is part of.
includeOnlyOpenItems|System.Nullable&lt;System.bool&gt;|If null or true: include only open items, otherwise; include all items


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.Ledger.SupplierBalance&gt;](GoApi.Reporting.Ledger.SupplierBalance.md)|IQueryable&lt;SupplierBalance&gt;.



