
OutgoingInvoice.DeliveryAddressCountryCode
================
**Namespace:** GoApi.Invoices

Gets the delivery address CountryCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .

### Syntax
```csharp
	public string DeliveryAddressCountryCode { get; internal set; }
```

### Type

string



