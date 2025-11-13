
JournalEntryVoucher.Payout
================
**Namespace:** GoApi.JournalEntry

Get or set a flag indicating whether this voucher should be paid using remittance.      Defaults to true, and if true a remittance draft will be created when the voucher is posted in Go.      If voucher is of type SupplierInvoice or SupplierCreditNote and SupplierCode is set, then the "Pay out invoices" value on the supplier will be used.      Only relevant on voucher of the type SupplierInvoice, SupplierCreditNote and Expense.

### Syntax
```csharp
	public Nullable<System.bool> Payout { get; set; }
```

### Type

System.Nullable&lt;System.bool&gt;



