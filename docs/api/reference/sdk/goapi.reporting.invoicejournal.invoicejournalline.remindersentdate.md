
InvoiceJournalLine.ReminderSentDate
================
**Namespace:** GoApi.Reporting.InvoiceJournal

Gets the reminder sent date. If GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceStatus on this line is PaymentReminderSent, NoticeOfDebtCollectionSent, PaymentDemandSent or WarrantOfExecutionSent;     this property will contain the date which that type of reminder was sent.

### Syntax
```csharp
	public Nullable<System.DateTime> ReminderSentDate { get; set; }
```

### Type

System.Nullable&lt;System.DateTime&gt;



