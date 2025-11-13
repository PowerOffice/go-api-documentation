
ImportLine.AgricultureDepartment
================
**Namespace:** GoApi.Import

Gets or sets the agriculture department to the account. If the client is an agriculture client, the account code is no longer unique and must be combined with agriculture department.     Defaults to the client's default agriculture department if not provided and the client is an agriculture client for most accounts. Some balance accounts defaults to finance as agriculture department.

### Syntax
```csharp
	public Nullable<GoApi.Common.AgricultureDepartment> AgricultureDepartment { get; set; }
```

### Type

[Nullable&lt;GoApi.Common.AgricultureDepartment&gt;](GoApi.Common.AgricultureDepartment.md)



