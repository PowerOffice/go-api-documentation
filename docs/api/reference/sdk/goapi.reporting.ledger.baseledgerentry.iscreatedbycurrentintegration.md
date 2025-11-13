
BaseLedgerEntry.IsCreatedByCurrentIntegration
================
**Namespace:** GoApi.Reporting.Ledger

Gets whether the ledger entry is created by the integration currently communicating with the API. Will be true for all entries that are created by the same integration user (same Application Key) as the integration currently authorized.

### Syntax
```csharp
	public bool IsCreatedByCurrentIntegration { get; set; }
```

### Type

bool



