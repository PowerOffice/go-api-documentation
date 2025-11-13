
OutgoingInvoice.RelatedDocumentNo
================
**Namespace:** GoApi.Invoices

Gets or sets the related DocumentNo linking the original invoice.     Can be used when creating credit notes.     If set on a credit note, this credit note will be matched with an invoice with the provided InvoiceNo / DocumentNo when the credit note is posted.

### Syntax
```csharp
	public string RelatedDocumentNo { get; set; }
```

### Type

string



