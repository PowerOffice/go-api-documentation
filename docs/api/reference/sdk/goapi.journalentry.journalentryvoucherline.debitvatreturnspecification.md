
JournalEntryVoucherLine.DebitVatReturnSpecification
================
**Namespace:** GoApi.JournalEntry

Gets or sets the [VatReturnSpecification](GoApi.Common.VatReturnSpecification.md) on the debit entry. Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .

### Syntax
```csharp
	public Nullable<GoApi.Common.VatReturnSpecification> DebitVatReturnSpecification { get; set; }
```

### Type

[Nullable&lt;GoApi.Common.VatReturnSpecification&gt;](GoApi.Common.VatReturnSpecification.md)



