
JournalEntryVoucherLine.CurrencyCode
================
**Namespace:** GoApi.JournalEntry

The currency code of the voucher line.     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the currency code on the head is always used.

### Syntax
```csharp
	public string CurrencyCode { get; set; }
```

### Type

string



