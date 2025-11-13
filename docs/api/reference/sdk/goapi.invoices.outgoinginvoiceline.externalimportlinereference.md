
OutgoingInvoiceLine.ExternalImportLineReference
================
**Namespace:** GoApi.Invoices

Gets or sets an external import line reference. Can be used to correlate/duplicate check invoice lines.     Must be a unique value for a given client, exception will be thrown if an OutgoingInvoiceLine with equal import reference exists for the same invoice.     Max length is 50 characters.

### Syntax
```csharp
	public string ExternalImportLineReference { get; set; }
```

### Type

string



