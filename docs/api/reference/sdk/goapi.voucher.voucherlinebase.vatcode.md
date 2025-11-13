
VoucherLineBase.VatCode
================
**Namespace:** GoApi.Voucher

Gets or sets the code of the [VatCode](GoApi.Dimension.VatCode.md) for this voucher line. Vat will be calculated depending on what code is provided from the total amount inclusive (Amount).     If not provided, the voucher will use default VAT code 0 on the line, resulting in a vat free transaction.

### Syntax
```csharp
	public string VatCode { get; set; }
```

### Type

string



