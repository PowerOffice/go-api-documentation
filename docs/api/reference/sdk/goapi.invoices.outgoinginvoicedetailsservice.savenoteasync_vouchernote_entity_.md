
public async virtual Task&lt;GoApi.Invoices.VoucherNote&gt; SaveNoteAsync(VoucherNote entity)
=======
**Namespace:** GoApi.Invoices

Saves a new [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .         Note that all with access to invoices can access the notes.

### Syntax
```csharp
	public async virtual Task<GoApi.Invoices.VoucherNote> SaveNoteAsync(VoucherNote entity)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
entity|[VoucherNote](GoApi.Invoices.VoucherNote.md)|The data object.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Invoices.VoucherNote&gt;](GoApi.Invoices.VoucherNote.md)|VoucherNote.



