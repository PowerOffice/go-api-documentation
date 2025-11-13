
public VoucherNote[] GetNotes(Guid voucherId)
=======
**Namespace:** GoApi.Invoices

Gets all [VoucherNote](GoApi.Invoices.VoucherNote.md) connected to a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) by the ID of the invoice.

### Syntax
```csharp
	public VoucherNote[] GetNotes(Guid voucherId)
```

### Parameters
Name | Type | Description
:----|:-----|:------------
voucherId|Guid|The recurring outgoing voucher id.


### Returns
Type | Description
:----|:------------
[VoucherNote[]](GoApi.Invoices.VoucherNote__.md)|VoucherNote[].



