
Party.StreetAddress
================
**Namespace:** GoApi.Party

OBSOLETE - Gets or sets the street address. This field is Obsolete but still exists due to backward compability. Use StreetAddresses instead.     If this entity does not have any street addresses, but has a mail address. This property will contain the GoApi.Party.Party.MailAddress . and GoApi.Party.Party.StreetAddresses will be an empty collection.

### Syntax
```csharp
	public Address StreetAddress { get; set; }
```

### Type

[Address](GoApi.Common.Address.md)



