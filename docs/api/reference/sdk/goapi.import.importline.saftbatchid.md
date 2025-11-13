
ImportLine.SaftBatchId
================
**Namespace:** GoApi.Import

Gets or sets the SAF-T batch id. This is the ID of the batch in the system that transferred the voucher.     Should be set if this voucher is a batch voucher containing the entries of multiple vouchers in the external system.     When this voucher is exported to SAF-T, this property is transactions BatchID in the SAF-T file.     The external systems SAF-T export should set the same BatchId on all the transactions that are included in this Voucher to ensure audit trail.     Max length is 35 characters.

### Syntax
```csharp
	public string SaftBatchId { get; set; }
```

### Type

string



