
public Stream GetInvoiceEhf(Guid invoiceId)
=======
**Namespace:** GoApi.Factoring

Get the ehf xml document for a [FactoringInvoiceDetails](GoApi.Factoring.FactoringInvoiceDetails.md) invoice by it's Id as Stream.

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



