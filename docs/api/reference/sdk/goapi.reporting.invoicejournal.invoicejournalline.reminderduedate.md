
InvoiceJournalLine.ReminderDueDate
================
**Namespace:** GoApi.Reporting.InvoiceJournal

Gets the reminder due date. If GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceStatus on this line is PaymentReminderSent, NoticeOfDebtCollectionSent, PaymentDemandSent or WarrantOfExecutionSent;     this property will contain the date which that reminder is due.

### Syntax
```csharp
	public Nullable<System.DateTime> ReminderDueDate { get; set; }
```

### Type

System.Nullable&lt;System.DateTime&gt;



