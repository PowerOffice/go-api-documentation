
OutgoingInvoiceVoucher.Lines
================
**Namespace:** GoApi.Voucher

Gets or sets the outgoing invoice lines ( [OutgoingInvoiceVoucherLine](GoApi.Voucher.OutgoingInvoiceVoucherLine.md) ).         All lines will be posted credit and the credit sum of the lines will be posted debit on the [Customer](GoApi.Party.Customer.md) sub ledger account.         Lines that shall be posted debit should be specified with negative amount.

### Syntax
```csharp
	public IEnumerable<GoApi.Voucher.OutgoingInvoiceVoucherLine> Lines { get; set; }
```

### Type

[IEnumerable&lt;GoApi.Voucher.OutgoingInvoiceVoucherLine&gt;](GoApi.Voucher.OutgoingInvoiceVoucherLine.md)



