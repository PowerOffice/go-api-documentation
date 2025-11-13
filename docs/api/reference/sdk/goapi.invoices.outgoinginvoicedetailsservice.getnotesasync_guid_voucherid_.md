
public async virtual Task&lt;GoApi.Invoices.VoucherNote[]&gt; GetNotesAsync(Guid voucherId)
=======
**Namespace:** GoApi.Invoices

Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .

### Syntax
```csharp
	public async virtual Task<GoApi.Invoices.VoucherNote[]> GetNotesAsync(Guid voucherId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
voucherId|Guid|The outgoing voucher id.


### Returns
Type | Description
:----|:------------
[Task&lt;GoApi.Invoices.VoucherNote[]&gt;](GoApi.Invoices.VoucherNote__.md)|VoucherNote[].



