
BankTransfer.Id
================
**Namespace:** GoApi.Bank

Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.     Should not be provided by an external system using the PowerOffice Go API since we don't support editing BankTransfers after creation.     If a BankTransfer needs to be edited, it should be deleted before creating it again.

### Syntax
```csharp
	public Nullable<System.Guid> Id { get; internal set; }
```

### Type

System.Nullable&lt;System.Guid&gt;



### Examples


b868791b-bb1d-47fd-a98d-45b23220dba8

