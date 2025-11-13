
OutgoingInvoiceLine.VatReturnSpecification
================
**Namespace:** GoApi.Invoices

Gets or sets the [VatReturnSpecification](GoApi.Common.VatReturnSpecification.md) . Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .

### Syntax
```csharp
	public VatReturnSpecification VatReturnSpecification { get; set; }
```

### Type

[VatReturnSpecification](GoApi.Common.VatReturnSpecification.md)



