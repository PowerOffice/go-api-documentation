
public FactoringInvoiceDetails Delivered(FactoringInvoiceDetailsDeliveredRequest request)
=======
**Namespace:** GoApi.Factoring

Adds an history entry on the [FactoringInvoiceDetails](GoApi.Factoring.FactoringInvoiceDetails.md) that an invoice has been delivered with an optional file and comment.      Calling this will set GoApi.Factoring.FactoringInvoiceDetails.IsDelivered to true.     Can only be called on invoices with GoApi.Factoring.FactoringInvoiceStatus.Active .

### Syntax
```csharp
	public FactoringInvoiceDetails Delivered(FactoringInvoiceDetailsDeliveredRequest request)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
request|[FactoringInvoiceDetailsDeliveredRequest](GoApi.Factoring.FactoringInvoiceDetailsDeliveredRequest.md)|The request.


### Returns
Type | Description
:----|:------------
[FactoringInvoiceDetails](GoApi.Factoring.FactoringInvoiceDetails.md)|FactoringInvoiceDetails.



