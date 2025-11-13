
OutgoingInvoiceLine
================

Outgoing invoice line representing one line on a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.Invoices.OutgoingInvoiceLine.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.     Important notice: When the [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) status goes from Draft or Approved to a posted invoice (status Sent, Paid or Archived). The draft invoice is copied over to a posted invoice, causing the Id to change.
[Accrual](GoApi.Invoices.OutgoingInvoiceLine.Accrual.md)|Gets or sets if GoApi.Invoices.OutgoingInvoiceLine.Accrual is used to enable accrual of the invoice. (Norwegian: Periodisering)
[DepartmentCode](GoApi.Invoices.OutgoingInvoiceLine.DepartmentCode.md)|Gets or sets code of the [Department](GoApi.Dimension.Department.md) this line is for.         By default the DepartmentCode in the head (OutgoingInvoice) will be inherited and used when this is null.         Use "-1" to set "No department".
[Description](GoApi.Invoices.OutgoingInvoiceLine.Description.md)|Gets or sets the description.
[Dim1Code](GoApi.Invoices.OutgoingInvoiceLine.Dim1Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 1 this line is for.
[Dim2Code](GoApi.Invoices.OutgoingInvoiceLine.Dim2Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 2 this line is for.
[Dim3Code](GoApi.Invoices.OutgoingInvoiceLine.Dim3Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 3 this line is for.
[DiscountPercent](GoApi.Invoices.OutgoingInvoiceLine.DiscountPercent.md)|Gets or sets the discount. The value must be between 0 and 1. I.e. 0.5 = 50% discount.         Can also be used to add a premium in percent of the sales price (usually markup) by having negative number. Negative numbers can be between -10 and 0.
[ExemptVat](GoApi.Invoices.OutgoingInvoiceLine.ExemptVat.md)|
[ExternalImportLineReference](GoApi.Invoices.OutgoingInvoiceLine.ExternalImportLineReference.md)|Gets or sets an external import line reference. Can be used to correlate/duplicate check invoice lines.     Must be a unique value for a given client, exception will be thrown if an OutgoingInvoiceLine with equal import reference exists for the same invoice.     Max length is 50 characters.
[IsDeleted](GoApi.Invoices.OutgoingInvoiceLine.IsDeleted.md)|Flag indicating if a line should be deleted from the invoice when calling the save method. This property should be used when deleting lines.
[LineType](GoApi.Invoices.OutgoingInvoiceLine.LineType.md)|Gets or sets the type of the line.      When adding invoice lines to the [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) , the types supported are GoApi.Common.VoucherLineType.Normal , GoApi.Common.VoucherLineType.Summary and GoApi.Common.VoucherLineType.Text .
[LocationCode](GoApi.Invoices.OutgoingInvoiceLine.LocationCode.md)|Gets the code of the [Location](GoApi.Projects.Location.md) this line is for.
[NetAmount](GoApi.Invoices.OutgoingInvoiceLine.NetAmount.md)|Gets the net amount. This is calculated by PowerOffice Go using the quantity, product price (or overridden unit price) and discount, not including value added tax (VAT).
[ProductCode](GoApi.Invoices.OutgoingInvoiceLine.ProductCode.md)|Gets or sets the code of the [Product](GoApi.Products.Product.md) . Must be provided on lines that affects the result (lines that are of GoApi.Common.VoucherLineType.Normal ).
[ProjectCode](GoApi.Invoices.OutgoingInvoiceLine.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) this line is for.         By default the ProjectCode in the head (OutgoingInvoice) will be inherited and used when this is null.         Use "-1" to set "No project".
[Quantity](GoApi.Invoices.OutgoingInvoiceLine.Quantity.md)|Gets or sets the quantity.
[SalesAccount](GoApi.Invoices.OutgoingInvoiceLine.SalesAccount.md)|Gets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT, or the line has ExemptVat set to true.     The usual application in Go is that the alternative sales account is used for vat free sales with code 5. The alternative sales account can, however, be used with an account with vat in order to alternate between different vat codes on the product.     This applies to all outgoing invoices with OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .     Lines on invoices that are posted (has OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Sent or GoApi.Invoices.OutgoingInvoiceStatus.Paid .), this property will contain the actual account that was used to post the revenue.
[SalesPersonEmployeeCode](GoApi.Invoices.OutgoingInvoiceLine.SalesPersonEmployeeCode.md)|Gets or sets code of the [Employee](GoApi.Party.Employee.md) that is the sales person on this line.
[SortOrder](GoApi.Invoices.OutgoingInvoiceLine.SortOrder.md)|Gets or sets the sort order. Can be used to specify the order of the lines on the invoice.
[TotalAmount](GoApi.Invoices.OutgoingInvoiceLine.TotalAmount.md)|Gets the total amount. This is calculated by PowerOffice Go using the quantity, product price (or overridden unit price) and discount, including value added tax (VAT).
[UnitCost](GoApi.Invoices.OutgoingInvoiceLine.UnitCost.md)|Gets or sets the overridden unit cost price for this [Product](GoApi.Products.Product.md) . If this is not provided, the unit cost price on the product will be set.
[UnitOfMeasure](GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasure.md)|OBSOLETE - Gets or sets the unit of measure. This is an Oasis compatible unit-of-measure code. This property is deprecated. Use GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasureCode .         If both GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasure and GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasureCode is set, GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasureCode will be used.
[UnitOfMeasureCode](GoApi.Invoices.OutgoingInvoiceLine.UnitOfMeasureCode.md)|Gets or sets the unit of measure. This is an Oasis compatible unit-of-measure code.
[UnitPrice](GoApi.Invoices.OutgoingInvoiceLine.UnitPrice.md)|Gets or sets the overridden unit price for this [Product](GoApi.Products.Product.md) before discount. If this is not provided, the unit price on the product will be set.
[VatCode](GoApi.Invoices.OutgoingInvoiceLine.VatCode.md)|Gets the code of the [VatCode](GoApi.Dimension.VatCode.md) . (Norwegian: MVA-kode)
[VatExemptSalesAccount](GoApi.Invoices.OutgoingInvoiceLine.VatExemptSalesAccount.md)|Gets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that will be used for posting the revenue from the product when the invoice is sent if the customer is exempt VAT.     This applies to all outgoing invoices with OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .     Lines on invoices that are posted (has OutgoingInvoiceStatus GoApi.Invoices.OutgoingInvoiceStatus.Sent or GoApi.Invoices.OutgoingInvoiceStatus.Paid .), this property will contain the actual account that was used to post the revenue.
[VatRate](GoApi.Invoices.OutgoingInvoiceLine.VatRate.md)|Gets the rate of the [VatCode](GoApi.Dimension.VatCode.md) .
[VatReturnSpecification](GoApi.Invoices.OutgoingInvoiceLine.VatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](GoApi.Common.VatReturnSpecification.md) . Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .

### Constructors
Name | Description
:----|:------------
[OutgoingInvoiceLine()](GoApi.Invoices.OutgoingInvoiceLine.OutgoingInvoiceLine__.md)|



