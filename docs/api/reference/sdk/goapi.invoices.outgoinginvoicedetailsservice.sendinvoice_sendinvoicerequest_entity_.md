
public virtual bool SendInvoice(SendInvoiceRequest entity)
=======
**Namespace:** GoApi.Invoices

Sends an invoice from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.     Note that it's not guaranteed that the invoice will be sent although this function returns successfully. The invoice will be processed asynchronously. If any errors occur during processing, these errors will be displayed in GoApi.Invoices.OutgoingInvoice.LastErrorMessage .     Check GoApi.Invoices.OutgoingInvoice.Status to ensure that the invoice has actually been sent.

### Syntax
```csharp
	public virtual bool SendInvoice(SendInvoiceRequest entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[SendInvoiceRequest](GoApi.Invoices.SendInvoiceRequest.md)|Contains parameters used for sending invoice.


### Returns
Type | Description
:----|:------------
bool|Bool with true if the invoice successfully added to the sending queue.



