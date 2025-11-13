
JournalEntryVoucherLine.Date
================
**Namespace:** GoApi.JournalEntry

The date to post this voucher line on.     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the date on the head is always used.

### Syntax
```csharp
	public Nullable<System.DateTime> Date { get; set; }
```

### Type

System.Nullable&lt;System.DateTime&gt;



