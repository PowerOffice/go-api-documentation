
public async Task&lt;System.bool&gt; DeleteAsync(OutgoingInvoice entity)
=======
**Namespace:** GoApi.Invoices

Deletes [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) asynchronously. Id must be provided on the OutgoingInvoice when calling this method.

### Syntax
```csharp
	public async Task<System.bool> DeleteAsync(OutgoingInvoice entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md)|The entity.


### Returns
Type | Description
:----|:------------
System.Threading.Tasks.Task&lt;System.bool&gt;|OutgoingInvoice.

### Exceptions
Type | Description
:----|:-----------
System.Exception|OutgoingInvoice.Id has no value.



