
OutgoingInvoice.ContactGroupId
================
**Namespace:** GoApi.Invoices

The contact group Id. Is set if the invoice is a group invoice. Set this to a valid [ContactGroup](GoApi.Party.ContactGroup.md) identifier if the invoice is a group invoice.         It is not possible to set GoApi.Invoices.OutgoingInvoice.CustomerCode and ContactGroupId on the same invoice.

### Syntax
```csharp
	public Nullable<System.long> ContactGroupId { get; set; }
```

### Type

System.Nullable&lt;System.long&gt;



