
GeneralLedgerAccount.Unit2
================
**Namespace:** GoApi.AccountingSettings

Gets or sets the secondary unit of measure ( [UnitOfMeasureCode](GoApi.Common.UnitOfMeasureCode.md) ). This is an Oasis compatible unit-of-measure code that is only used on agriculture clients.         If the unit of measure was saved using GoApi.AccountingSettings.GeneralLedgerAccount.Unit2 , and the value is not compatible with this enum,         this property will be NULL and the original unit string will be present in GoApi.AccountingSettings.GeneralLedgerAccount.Unit2 .

### Syntax
```csharp
	public Nullable<GoApi.Common.UnitOfMeasureCode> Unit2 { get; set; }
```

### Type

[Nullable&lt;GoApi.Common.UnitOfMeasureCode&gt;](GoApi.Common.UnitOfMeasureCode.md)



