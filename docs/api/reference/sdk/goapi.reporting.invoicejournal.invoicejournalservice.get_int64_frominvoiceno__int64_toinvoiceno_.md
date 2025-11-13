
public IQueryable&lt;GoApi.Reporting.InvoiceJournal.InvoiceJournalLine&gt; Get(long fromInvoiceNo, long toInvoiceNo)
=======
**Namespace:** GoApi.Reporting.InvoiceJournal

Gets all outgoing invoices and credit notes ( [InvoiceJournalLine](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md) ) with invoice number between two numbers.

### Syntax
```csharp
	public IQueryable<GoApi.Reporting.InvoiceJournal.InvoiceJournalLine> Get(long fromInvoiceNo, long toInvoiceNo)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
fromInvoiceNo|long|From invoice no.
toInvoiceNo|long|To invoice no.


### Returns
Type | Description
:----|:------------
[IQueryable&lt;GoApi.Reporting.InvoiceJournal.InvoiceJournalLine&gt;](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md)|IQueryable&lt;InvoiceJournalLine&gt;.



