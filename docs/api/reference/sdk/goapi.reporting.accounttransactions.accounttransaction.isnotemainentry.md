
AccountTransaction.IsNoteMainEntry
================
**Namespace:** GoApi.Reporting.AccountTransactions

Gets whether the entry is the main sub ledger entry created from the "head" of the voucher. Relevant for supplier invoices, which might have several supplier transactions, but only one being the main supplier entry for the invoice.

### Syntax
```csharp
	public bool IsNoteMainEntry { get; internal set; }
```

### Type

bool



