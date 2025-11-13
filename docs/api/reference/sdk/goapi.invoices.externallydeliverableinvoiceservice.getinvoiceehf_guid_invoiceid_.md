
public Stream GetInvoiceEhf(Guid invoiceId)
=======
**Namespace:** GoApi.Invoices

Get the ehf xml document for a [ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md) invoice by its Id as Stream.

### Syntax
```csharp
	public Stream GetInvoiceEhf(Guid invoiceId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
invoiceId|Guid|The invoice id.


### Returns
Type | Description
:----|:------------
System.IO.Stream|A Stream containing the xml data.



