
BankTransfer.InvoiceId
================
**Namespace:** GoApi.Bank

Gets or sets the Id of the Supplier Invoice that this bank transfer should be matched against when the remittance receipt is imported.      When creating a [BankTransfer](GoApi.Bank.BankTransfer.md) , you can set either this property or GoApi.Bank.BankTransfer.SubLedgerEntryId .     If GoApi.Bank.BankTransfer.SubLedgerEntryId is set, and the entry is related to a Supplier Invoice, this property will contain the ID of the SubLedgerEntry's Invoice.

### Syntax
```csharp
	public Nullable<System.Guid> InvoiceId { get; set; }
```

### Type

System.Nullable&lt;System.Guid&gt;



