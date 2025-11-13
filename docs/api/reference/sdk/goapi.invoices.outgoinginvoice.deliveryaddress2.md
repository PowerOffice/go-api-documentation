
OutgoingInvoice.DeliveryAddress2
================
**Namespace:** GoApi.Invoices

Gets the delivery address Address2 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .

### Syntax
```csharp
	public string DeliveryAddress2 { get; internal set; }
```

### Type

string



