
InvoiceJournalSalesLine (InvoiceJournalSalesLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Description|string|Gets or sets the description.
DiscountPercent|number|Gets or sets the discount percent.
Id|number|Gets the unique identifier for this line.
Product|[Product](Type_Product.md)|OBSOLETE - Gets or sets the product.         Note: Returned object only contains Id, Code, Name, Type and LastChanged of Product, all other properties are empty.         Use Product.Id and query the Product endpoint to get full Product object.
Quantity|number|Gets or sets the quantity.
TotalExclusive|number|Gets or sets the total exclusive value added tax (VAT).
TotalInclusive|number|Gets or sets the total inclusive value added tax (VAT).
TotalVat|number|Gets or sets the total value added tax (VAT).
Unit|string|Gets or sets the unit. A value holding an Oasis compatible unit-of-measure code.
UnitPrice|number|Gets or sets the unit price.
VoucherLineType|[VoucherLineType](Type_VoucherLineType.md)|Gets or sets the type of the voucher line ( GoApi.Reporting.InvoiceJournal.InvoiceJournalSalesLine.VoucherLineType
