
public async Task&lt;GoApi.Invoices.VoucherNote&gt; SaveNoteAsync(VoucherNote note)
=======
**Namespace:** GoApi.Invoices

Saves a [VoucherNote](GoApi.Invoices.VoucherNote.md) or updates an existing note on a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) . Note that all with access to invoices can access the notes.

### Syntax
```csharp
	public async Task<GoApi.Invoices.VoucherNote> SaveNoteAsync(VoucherNote note)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
note|[VoucherNote](GoApi.Invoices.VoucherNote.md)|The data object.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Invoices.VoucherNote&gt;](GoApi.Invoices.VoucherNote.md)|VoucherNote.



