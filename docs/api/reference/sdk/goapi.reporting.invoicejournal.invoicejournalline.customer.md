
InvoiceJournalLine.Customer
================
**Namespace:** GoApi.Reporting.InvoiceJournal

OBSOLETE - Gets or sets the customer.         Note: Returned object only contains Id, Code and Name of Customer, all other properties are empty (CustomerCreatedDate, CreatedDate and LastChanged are default value since they are not nullable).         Use Customer.Id (or CustomerCode) and query the Customer endpoint to get full Customer object.

### Syntax
```csharp
	public Customer Customer { get; set; }
```

### Type

[Customer](GoApi.Party.Customer.md)



