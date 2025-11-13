
OutgoingInvoiceLine.Id
================
**Namespace:** GoApi.Invoices

Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.     Important notice: When the [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) status goes from Draft or Approved to a posted invoice (status Sent, Paid or Archived). The draft invoice is copied over to a posted invoice, causing the Id to change.

### Syntax
```csharp
	public Nullable<System.long> Id { get; internal set; }
```

### Type

System.Nullable&lt;System.long&gt;



