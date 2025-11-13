
OutgoingInvoice.ExternalImportReference
================
**Namespace:** GoApi.Invoices

Gets or sets an external import reference. Can be used to correlate/duplicate check invoices.     Must be a unique value for a given client, exception will be thrown if an OutgoingInvoice with equal import reference exists.     Max length is 50 characters.

### Syntax
```csharp
	public string ExternalImportReference { get; set; }
```

### Type

string



