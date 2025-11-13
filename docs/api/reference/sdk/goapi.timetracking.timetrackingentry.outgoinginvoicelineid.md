
TimeTrackingEntry.OutgoingInvoiceLineId
================
**Namespace:** GoApi.TimeTracking

Gets or sets the identifier of the [OutgoingInvoiceLine](GoApi.Invoices.OutgoingInvoiceLine.md) that this time tracking entry has been invoiced on.      The outgoing invoice line can either be for an invoice that is in draft mode or an invoice that is sent.      Setting this value to a valid outgoing invoice line id will set the GoApi.TimeTracking.TimeTrackingEntry.IsInvoiced to true and the status of the time tracking entry to invoiced, and it will no longer appear on new invoices created through billing.

### Syntax
```csharp
	public Nullable<System.long> OutgoingInvoiceLineId { get; set; }
```

### Type

System.Nullable&lt;System.long&gt;



