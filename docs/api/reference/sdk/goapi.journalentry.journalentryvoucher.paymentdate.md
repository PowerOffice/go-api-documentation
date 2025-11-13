
JournalEntryVoucher.PaymentDate
================
**Namespace:** GoApi.JournalEntry

Get or set the suggested date of payment. Relevant if Payout is true. Used to define the date of payment for the remittance.     Defaults to the dueDate if not set, and relevant only for vouchers of the type SupplierInvoice, SupplierCreditNote and Expense.

### Syntax
```csharp
	public Nullable<System.DateTime> PaymentDate { get; set; }
```

### Type

System.Nullable&lt;System.DateTime&gt;



