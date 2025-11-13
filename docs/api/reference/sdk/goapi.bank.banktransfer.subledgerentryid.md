
BankTransfer.SubLedgerEntryId
================
**Namespace:** GoApi.Bank

Gets or sets the Id of the SubLedger Entry that this bank transfer should be matched against when the remittance receipt is imported.      When creating a [BankTransfer](GoApi.Bank.BankTransfer.md) , you can set either this property or GoApi.Bank.BankTransfer.InvoiceId .     If GoApi.Bank.BankTransfer.InvoiceId is set this property contain return the ID of the Invoice's SubLedgerEntry.

### Syntax
```csharp
	public Nullable<System.long> SubLedgerEntryId { get; set; }
```

### Type

System.Nullable&lt;System.long&gt;



