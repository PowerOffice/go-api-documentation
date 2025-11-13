
OutgoingInvoice.ExpectedDueDate
================
**Namespace:** GoApi.Invoices

Gets the expected due date. This is the date when the invoice is expected to be paid by a customer.         In essence this is an override of GoApi.Invoices.OutgoingInvoice.DueDate , that is set by a user in PowerOffice Go after the invoice has been delivered.         This field will only have a value on sent invoices.

### Syntax
```csharp
	public Nullable<System.DateTime> ExpectedDueDate { get; internal set; }
```

### Type

System.Nullable&lt;System.DateTime&gt;



