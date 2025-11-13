
OutgoingInvoiceLine (OutgoingInvoiceLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Accrual|[Accrual](Type_Accrual.md)|Gets or sets if GoApi.Invoices.OutgoingInvoiceLine.Accrual is used to enable accrual of the invoice. (Norwegian: Periodisering)
DepartmentCode|string|Gets or sets code of the [Department](Type_Department.md) this line is for.         By default the DepartmentCode in the head (OutgoingInvoice) will be inherited and used when this is null.         Use "-1" to set "No department".
Description|string|Gets or sets the description.
Dim1Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 1 this line is for.
Dim2Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 2 this line is for.
Dim3Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 3 this line is for.
DiscountPercent|number|Gets or sets the discount. The value must be between 0 and 1. I.e. 0.5 = 50% discount.         Can also be used to add a premium in percent of the sales price (usually markup) by having negative number. Negative numbers can be between -10 and 0.
ExemptVat|boolean|
ExternalImportLineReference|string|Gets or sets an external import line reference. Can be used to correlate/duplicate check invoice lines.     Must be a unique value for a given client, exception will be thrown if an OutgoingInvoiceLine with equal import reference exists for the same invoice.     Max length is 50 characters.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.     Important notice: When the [OutgoingInvoice](Type_OutgoingInvoice.md) status goes from Draft or Approved to a posted invoice (status Sent, Paid or Archived). The draft invoice is copied over to a posted invoice, causing the Id to change.
IsDeleted|boolean|Flag indicating if a line should be deleted from the invoice when calling the save method. This property should be used when deleting lines.
LineType|[VoucherLineType](Type_VoucherLineType.md)|Gets or sets the type of the line.      When adding invoice lines to the [OutgoingInvoice](Type_OutgoingInvoice.md) , the types supported are GoApi.Common.VoucherLineType.Normal , GoApi.Common.VoucherLineType.Summary and GoApi.Common.VoucherLineType.Text .
LocationCode|string|Gets the code of the [Location](Type_Location.md) this line is for.
NetAmount|number|Gets the net amount. This is calculated by PowerOffice Go using the quantity, product price (or overridden unit price) and discount, not including value added tax (VAT).
ProductCode|string|Gets or sets the code of the [Product](Type_Product.md) . Must be provided on lines that affects the result (lines that are of GoApi.Common.VoucherLineType.Normal ).
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) this line is for.         By default the ProjectCode in the head (OutgoingInvoice) will be inherited and used when this is null.         Use "-1" to set "No project".
Quantity|number|Gets or sets the quantity.
SalesAccount|number|Gets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT, or the line has ExemptVat set to true.     The usual application in Go is that the alternative sales account is used for vat free sales with code 5. The alternative sales account can, however, be used with an account with vat in order to alternate between different vat codes on the product.     This applies to all outgoing invoices with OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .     Lines on invoices that are posted (has OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Sent or GoApi.Invoices.OutgoingInvoiceStatus.Paid .), this property will contain the actual account that was used to post the revenue.
SalesPersonEmployeeCode|number|Gets or sets code of the [Employee](Type_Employee.md) that is the sales person on this line.
SortOrder|number|Gets or sets the sort order. Can be used to specify the order of the lines on the invoice.
TotalAmount|number|Gets the total amount. This is calculated by PowerOffice Go using the quantity, product price (or overridden unit price) and discount, including value added tax (VAT).
UnitCost|number|Gets or sets the overridden unit cost price for this [Product](Type_Product.md) . If this is not provided, the unit cost price on the product will be set.
UnitOfMeasure|string|OBSOLETE - Gets or sets the unit of measure. This is an Oasis compatible unit-of-measure code. This property is deprecated. Use GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasureCode .         If both GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasure and GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasureCode is set, GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasureCode will be used.
UnitOfMeasureCode|[UnitOfMeasureCode](Type_UnitOfMeasureCode.md)|Gets or sets the unit of measure. This is an Oasis compatible unit-of-measure code.
UnitPrice|number|Gets or sets the overridden unit price for this [Product](Type_Product.md) before discount. If this is not provided, the unit price on the product will be set.
VatCode|string|Gets the code of the [VatCode](Type_VatCode.md) . (Norwegian: MVA-kode)
VatExemptSalesAccount|number|Gets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT.     This applies to all outgoing invoices with OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .     Lines on invoices that are posted (has OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Sent or GoApi.Invoices.OutgoingInvoiceStatus.Paid .), this property will contain the actual account that was used to post the revenue.
VatRate|number|Gets the rate of the [VatCode](Type_VatCode.md) .
VatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](Type_VatReturnSpecification.md) . Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .
