
JournalEntryVoucherLine.CurrencyRate
================
**Namespace:** GoApi.JournalEntry

Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the date on the head is always used.

### Syntax
```csharp
	public Nullable<System.double> CurrencyRate { get; set; }
```

### Type

System.Nullable&lt;System.double&gt;



