
JournalEntryVoucher.CurrencyRate
================
**Namespace:** GoApi.JournalEntry

Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).     Only relevant for vouchertypes GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .     For other vouchertypes, the currency rate can be set on the lines.

### Syntax
```csharp
	public Nullable<System.double> CurrencyRate { get; set; }
```

### Type

System.Nullable&lt;System.double&gt;



