
GeneralLedgerAccount.Unit1
================
**Namespace:** GoApi.AccountingSettings

Gets or sets the primary unit of measure ( [UnitOfMeasureCode](GoApi.Common.UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code that is only used on agriculture clients.         If the unit of measure was saved using GoApi.AccountingSettings.GeneralLedgerAccount.Unit1 , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.AccountingSettings.GeneralLedgerAccount.Unit1 .

### Syntax
```csharp
	public Nullable<GoApi.Common.UnitOfMeasureCode> Unit1 { get; set; }
```

### Type

[Nullable&lt;GoApi.Common.UnitOfMeasureCode&gt;](GoApi.Common.UnitOfMeasureCode.md)



