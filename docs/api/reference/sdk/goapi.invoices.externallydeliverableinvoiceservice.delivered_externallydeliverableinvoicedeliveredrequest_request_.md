
public ExternallyDeliverableInvoice Delivered(ExternallyDeliverableInvoiceDeliveredRequest request)
=======
**Namespace:** GoApi.Invoices

Adds an history entry on the [ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md) that an invoice has been delivered with an optional file and comment.      Calling this will set GoApi.Invoices.ExternallyDeliverableInvoice.IsDelivered to true.

### Syntax
```csharp
	public ExternallyDeliverableInvoice Delivered(ExternallyDeliverableInvoiceDeliveredRequest request)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
request|[ExternallyDeliverableInvoiceDeliveredRequest](GoApi.Invoices.ExternallyDeliverableInvoiceDeliveredRequest.md)|The request.


### Returns
Type | Description
:----|:------------
[ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md)|ExternallyDeliverableInvoice.



