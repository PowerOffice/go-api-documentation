
public bool SendInvoice(SendInvoiceRequest sendInvoiceRequest)
=======
**Namespace:** GoApi.Invoices

Sends an invoice from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.

### Syntax
```csharp
	public bool SendInvoice(SendInvoiceRequest sendInvoiceRequest)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
sendInvoiceRequest|[SendInvoiceRequest](GoApi.Invoices.SendInvoiceRequest.md)|Contains parameters used for sending invoice.


### Returns
Type | Description
:----|:------------
bool|Bool with true if the invoice successfully added to the sending queue.



