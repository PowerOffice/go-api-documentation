
OutgoingInvoiceVoucherLine.DiscountPercent
================
**Namespace:** GoApi.Voucher

Gets or sets the discount on the sales line. This field is only for information and does not effect Amount (The discount is already included in the amount).     The value should be between 0 and 100, where the value 50 means 50 % discount.     Can also be used to add a premium in percent of the sales price (usually markup) by having negative number. Negative numbers can be between -1000 and 0.

### Syntax
```csharp
	public Nullable<System.decimal> DiscountPercent { get; set; }
```

### Type

System.Nullable&lt;System.decimal&gt;



