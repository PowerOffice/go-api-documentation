
SendInvoiceRequest.DeliveryType
================
**Namespace:** GoApi.Invoices

Gets or sets the type of delivery for the invoice.     If not provided or set to null; the delivery type will default to GoApi.Invoices.SendInvoiceDeliveryType.PdfByEmail if GoApi.Invoices.SendInvoiceRequest.SendByEhfIfPossible , GoApi.Invoices.SendInvoiceRequest.SendByEfakturaIfPossible or GoApi.Invoices.SendInvoiceRequest.SendByAvtaleGiroIfPossible is false or not available.

### Syntax
```csharp
	public Nullable<GoApi.Invoices.SendInvoiceDeliveryType> DeliveryType { get; set; }
```

### Type

[Nullable&lt;GoApi.Invoices.SendInvoiceDeliveryType&gt;](GoApi.Invoices.SendInvoiceDeliveryType.md)



