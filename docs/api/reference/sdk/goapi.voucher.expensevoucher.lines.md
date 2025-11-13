
ExpenseVoucher.Lines
================
**Namespace:** GoApi.Voucher

Gets or sets the expense lines ( [ExpenseVoucherLine](GoApi.Voucher.ExpenseVoucherLine.md) ).         All lines will be posted debit and the debit sum of the lines will be posted credit on the employee's sub ledger account.         Lines that shall be posted credit should be specified with negative amount.

### Syntax
```csharp
	public IEnumerable<GoApi.Voucher.ExpenseVoucherLine> Lines { get; set; }
```

### Type

[IEnumerable&lt;GoApi.Voucher.ExpenseVoucherLine&gt;](GoApi.Voucher.ExpenseVoucherLine.md)



