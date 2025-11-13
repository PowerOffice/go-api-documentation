
public virtual VoucherNote[] GetNotes(Guid voucherId)
=======
**Namespace:** GoApi.Invoices

Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .

### Syntax
```csharp
	public virtual VoucherNote[] GetNotes(Guid voucherId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
voucherId|Guid|The outgoing voucher id.


### Returns
Type | Description
:----|:------------
[VoucherNote[]](GoApi.Invoices.VoucherNote__.md)|VoucherNote[].



