
public IQueryable&lt;GoApi.Reporting.InvoiceJournal.InvoiceJournalLine&gt; Get(DateTime fromDate, DateTime toDate)
=======
**Namespace:** GoApi.Reporting.InvoiceJournal

Gets all outgoing invoices and credit notes ( [InvoiceJournalLine](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md) ) sent between two dates.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.InvoiceJournal.InvoiceJournalLine> Get(DateTime fromDate, DateTime toDate)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromDate|DateTime|From date.
toDate|DateTime|To date.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.InvoiceJournal.InvoiceJournalLine&gt;](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md)|IQueryable&lt;InvoiceJournalLine&gt;.



