
public IQueryable&lt;GoApi.Reporting.TimeTransactions.TimeTransaction&gt; Get(DateTime fromDate, DateTime toDate, Nullable&lt;System.long&gt; orderNo, Nullable&lt;System.long&gt; invoiceNo, Nullable&lt;System.long&gt; payrollNo)
=======
**Namespace:** GoApi.Reporting.TimeTransactions

Gets all the [TimeTransaction](GoApi.Reporting.TimeTransactions.TimeTransaction.md) in the specified date range (FromDate - ToDate) and that matches the specified in-values.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.TimeTransactions.TimeTransaction> Get(DateTime fromDate, DateTime toDate, Nullable<System.long> orderNo, Nullable<System.long> invoiceNo, Nullable<System.long> payrollNo)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromDate|DateTime|From date.
toDate|DateTime|To date.
orderNo|System.Nullable&lt;System.long&gt;|Order number
invoiceNo|System.Nullable&lt;System.long&gt;|Invoice number.
payrollNo|System.Nullable&lt;System.long&gt;|Payroll number.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.TimeTransactions.TimeTransaction&gt;](GoApi.Reporting.TimeTransactions.TimeTransaction.md)|IQueryable&lt;TimeTransaction&gt;.



