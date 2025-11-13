
TimeTrackingEntry.HourlyCost
================
**Namespace:** GoApi.TimeTracking

Gets or sets the actual cost per hour for this time transaction.     This rate should include any CostPriceFactor of time specification before alterations before being saved.     Example: If an employee cost per hour is 3, and CostPriceFactor is 2, 6 should be saved as HourlyCost for this entry.

### Syntax
```csharp
	public Nullable<System.decimal> HourlyCost { get; set; }
```

### Type

System.Nullable&lt;System.decimal&gt;



