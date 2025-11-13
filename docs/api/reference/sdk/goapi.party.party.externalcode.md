
Party.ExternalCode
================
**Namespace:** GoApi.Party

Gets or sets the external code. If this entity is imported with a number outside the number range for this type of party, this field will contain the imported original number.     This number has precedence over GoApi.Party.Party.Code when choosing which entity to use when importing files through the import service.     I.e. when importing OutgoingInvoices on the import service on a customer with Code 10000 - the import will choose the customer with ExternalCode 10000 over the customer with Code 10000.

### Syntax
```csharp
	public Nullable<System.long> ExternalCode { get; set; }
```

### Type

System.Nullable&lt;System.long&gt;



