
VoucherLineBase.Amount
================
**Namespace:** GoApi.Voucher

Gets or sets the total amount of the line. This is the amount to be posted in the same currency as the voucher, or the currency overridden on the line for some voucher types.          The amount is specified VAT inclusive.         Specifying a negative amount here will post the amount as credit and a positive amount will post the amount as debit on all voucher types except [OutgoingInvoiceVoucher](GoApi.Voucher.OutgoingInvoiceVoucher.md) / [OutgoingInvoiceVoucherLine](GoApi.Voucher.OutgoingInvoiceVoucherLine.md) .

### Syntax
```csharp
	public decimal Amount { get; set; }
```

### Type

decimal



