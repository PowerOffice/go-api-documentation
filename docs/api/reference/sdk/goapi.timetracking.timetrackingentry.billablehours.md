
TimeTrackingEntry.BillableHours
================
**Namespace:** GoApi.TimeTracking

Gets or sets the billable hours of the entry.     If not provided, the number will default to the property Minutes (calculated to hours) including potential markup (TimeSpecification.CostPriceFactor) set in Go.     Cannot be changed if IsInvoiced is true. If provided, the billable time will be set accordingly in Go without markup effects. This property is only relevant for billable activity types.

### Syntax
```csharp
	public Nullable<System.decimal> BillableHours { get; set; }
```

### Type

System.Nullable&lt;System.decimal&gt;



