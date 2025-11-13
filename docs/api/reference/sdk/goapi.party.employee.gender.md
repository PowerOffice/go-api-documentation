
Employee.Gender
================
**Namespace:** GoApi.Party

Gets or sets the gender of the employee. Valid inputs; 0, (Unspecified) 1, (Male) and 2 (Female).     Requires Social Security Number privilege to retreive, and will return "hidden" (-1) if queried without this privilege. The privilege must be granted by the API team.

### Syntax
```csharp
	public Nullable<GoApi.Common.Gender> Gender { get; set; }
```

### Type

[Nullable&lt;GoApi.Common.Gender&gt;](GoApi.Common.Gender.md)



