
IncomingInvoiceVoucher.Lines
================
**Namespace:** GoApi.Voucher

Gets or sets the incoming invoice lines ( [IncomingInvoiceVoucherLine](GoApi.Voucher.IncomingInvoiceVoucherLine.md) ).         All lines will be posted debit and the debit sum of the lines will be posted credit on the supplier's sub ledger account.         Lines that shall be posted credit should be specified with negative amount.

### Syntax
```csharp
	public IEnumerable<GoApi.Voucher.IncomingInvoiceVoucherLine> Lines { get; set; }
```

### Type

[IEnumerable&lt;GoApi.Voucher.IncomingInvoiceVoucherLine&gt;](GoApi.Voucher.IncomingInvoiceVoucherLine.md)



