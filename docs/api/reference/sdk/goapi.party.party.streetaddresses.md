
Party.StreetAddresses
================
**Namespace:** GoApi.Party

Gets or sets the street addresses. Take note here that the full collection of street addresses must exist when updating this property.         For instance if the supplier has two addresses in PowerOffice Go, and the API only provides one of them in this property, the other one will be deleted.

### Syntax
```csharp
	public IEnumerable<GoApi.Common.Address> StreetAddresses { get; set; }
```

### Type

[IEnumerable&lt;GoApi.Common.Address&gt;](GoApi.Common.Address.md)



