
SupplierLedgerEntry.Supplier
================
**Namespace:** GoApi.Reporting.Ledger

OBSOLETE - Gets or sets the supplier.         Note: Returned object only contains Id, Code and Name of Supplier, all other properties are empty (SupplierCreatedDate, CreatedDate and LastChanged are default value since they are not nullable).         Use Supplier.Id (or SupplierCode) and query the Supplier endpoint to get full Supplier object.

### Syntax
```csharp
	public Supplier Supplier { get; set; }
```

### Type

[Supplier](GoApi.Party.Supplier.md)



