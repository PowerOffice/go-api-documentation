
public FactoringInvoiceDetails UpdateFactoringInvoiceStatus(FactoringInvoiceStatusRequest request)
=======
**Namespace:** GoApi.Factoring

Updates the factoring status on the invoice with a specified [FactoringInvoiceStatus](GoApi.Factoring.FactoringInvoiceStatus.md) .     Cannot be called before the invoice is delivered through the GoApi.Factoring.FactoringService.Delivered(GoApi.Factoring.FactoringInvoiceDetailsDeliveredRequest) method.

### Syntax
```csharp
	public FactoringInvoiceDetails UpdateFactoringInvoiceStatus(FactoringInvoiceStatusRequest request)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
request|[FactoringInvoiceStatusRequest](GoApi.Factoring.FactoringInvoiceStatusRequest.md)|


### Returns
Type | Description
:----|:------------
[FactoringInvoiceDetails](GoApi.Factoring.FactoringInvoiceDetails.md)|FactoringInvoiceDetails.



