
Project.CreatedDate
================
**Namespace:** GoApi.Projects

Gets the created date of the project. Can be used in filtering to query only new projects

### Syntax
```csharp
	public DateTimeOffset CreatedDate { get; internal set; }
```

### Type

DateTimeOffset


### Remarks
When using Odata filter, use the following format:     $filter=CreatedDate gt datetimeoffset'2022-12-13T10:24:45'


### Examples


"2022-12-13T09:43:42 +00:00

