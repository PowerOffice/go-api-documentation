
VoucherLineBase.AccountCode
================
**Namespace:** GoApi.Voucher

Gets or sets the account code this voucher line should be posted on.     The account code can either be the code on a [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) ,     or if the accounting entry is on a sub ledger account, the code provided can be for a [Customer](GoApi.Party.Customer.md) , [Supplier](GoApi.Party.Supplier.md) or [Employee](GoApi.Party.Employee.md) .

### Syntax
```csharp
	public long AccountCode { get; set; }
```

### Type

long



