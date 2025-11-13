
public async virtual Task&lt;GoApi.Invoices.OutgoingInvoice&gt; SaveAsync(OutgoingInvoice entity)
=======
**Namespace:** GoApi.Invoices

Saves the specified [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) . This is an Invoice that will be ready for sending from PowerOffice Go, either with GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .

### Syntax
```csharp
	public async virtual Task<GoApi.Invoices.OutgoingInvoice> SaveAsync(OutgoingInvoice entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md)|The data object.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Invoices.OutgoingInvoice&gt;](GoApi.Invoices.OutgoingInvoice.md)|OutgoingInvoice.



