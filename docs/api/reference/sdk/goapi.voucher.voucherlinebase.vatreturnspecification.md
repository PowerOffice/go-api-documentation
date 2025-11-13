
VoucherLineBase.VatReturnSpecification
================
**Namespace:** GoApi.Voucher

Gets or sets the [VatReturnSpecification](GoApi.Common.VatReturnSpecification.md) . Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the voucher will use the vat returns specification that is default on the account if there is any, otherwise GoApi.Common.VatReturnSpecification.None .

### Syntax
```csharp
	public Nullable<GoApi.Common.VatReturnSpecification> VatReturnSpecification { get; set; }
```

### Type

[Nullable&lt;GoApi.Common.VatReturnSpecification&gt;](GoApi.Common.VatReturnSpecification.md)



