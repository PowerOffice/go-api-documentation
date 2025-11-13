
RemittanceInfoRequest.SupplierBankAccountCode
================
**Namespace:** GoApi.Voucher

The bank account code of the [Supplier](GoApi.Party.Supplier.md) that should be paid to. If not provided, the ReceivableBankAccount provided when invoice was posted will be used.         Bank account code is required if UseRemittance is true.

### Syntax
```csharp
	public string SupplierBankAccountCode { get; set; }
```

### Type

string



