
SalaryLine.OppositeAccount
================
**Namespace:** GoApi.Payroll

Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) , or [Customer](GoApi.Party.Customer.md) , [Supplier](GoApi.Party.Supplier.md) , [Employee](GoApi.Party.Employee.md) if this entry should generate a sub ledger entry.     Optional field to override what opposite account this salary line should be posted on.     If not provided, the account on the [PayItem](GoApi.Payroll.PayItem.md) will be used.

### Syntax
```csharp
	public Nullable<System.long> OppositeAccount { get; set; }
```

### Type

System.Nullable&lt;System.long&gt;



