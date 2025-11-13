
Voucher.SaftSourceId
================
**Namespace:** GoApi.Voucher

Gets or sets the SAF-T source id. This is the ID of the system that generated the voucher.     When this voucher is exported to SAF-T, this property is mapped on the transactions SourceID in the SAF-T file.     If the creating system is required to export it's own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of the external system to ensure an audit trail.     Max length is 35 characters.

### Syntax
```csharp
	public string SaftSourceId { get; set; }
```

### Type

string



