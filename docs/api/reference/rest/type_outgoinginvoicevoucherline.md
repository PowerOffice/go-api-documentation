
OutgoingInvoiceVoucherLine (OutgoingInvoiceVoucherLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AccountCode|number|Gets or sets the account code this voucher line should be posted on.     The account code can either be the code on a [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) ,     or if the accounting entry is on a sub ledger account, the code provided can be for a [Customer](Type_Customer.md) , [Supplier](Type_Supplier.md) or [Employee](Type_Employee.md) .
Accrual|[Accrual](Type_Accrual.md)|Gets or sets if GoApi.Voucher.OutgoingInvoiceVoucherLine.Accrual is used to enable accrual of the invoice. (Norwegian: Periodisering)
AgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the agricultural department if client is agriculture client
Amount|number|Gets or sets the total amount of the line. This is the amount to be posted in the same currency as the voucher, or the currency overridden on the line for some voucher types.          The amount is specified VAT inclusive.         Specifying a negative amount here will post the amount as credit and a positive amount will post the amount as debit on all voucher types except [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) / [OutgoingInvoiceVoucherLine](Type_OutgoingInvoiceVoucherLine.md) .
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) .     If set to "-1", this line will not inherit the department set on the voucher level, and no department will be posted to Go for this line
Description|string|Gets or sets the description.
Dim1Code|string|Gets or sets the code of the custom dimension 1.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim1 will be posted to Go for this line
Dim2Code|string|Gets or sets the code of the custom dimension 2.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim2 will be posted to Go for this line
Dim3Code|string|Gets or sets the code of the custom dimension 3.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim3 will be posted to Go for this line
DiscountPercent|number|Gets or sets the discount on the sales line. This field is only for information and does not effect Amount (The discount is already included in the amount).     The value should be between 0 and 100, where the value 50 means 50 % discount.     Can also be used to add a premium in percent of the sales price (usually markup) by having negative number. Negative numbers can be between -1000 and 0.
ExternalImportLineReference|string|Gets or sets the external import line reference. Used by external systems to match voucher lines. Max length is 50 characters.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
LocationCode|string|Gets or sets the code of the location.     If set to "-1", this line will not inherit the value set on the voucher level, and no Location will be posted to Go for this line
ProductCode|string|Gets or sets the code of the [Product](Type_Product.md) .
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) .         If set to "-1", this line will not inherit the project set on the voucher level, and no project will be posted to Go for this line
Quantity|number|Gets or sets the quantity.
Unit|string|Gets or sets the product unit.
UnitCostPrice|number|Gets or sets the unit cost price of this outgoing invoice line.
VatCode|string|Gets or sets the code of the [VatCode](Type_VatCode.md) for this voucher line. Vat will be calculated depending on what code is provided from the total amount inclusive (Amount).     If not provided, the voucher will use default VAT code 0 on the line, resulting in a vat free transaction.
VatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](Type_VatReturnSpecification.md) . Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the voucher will use the vat returns specification that is default on the account if there is any, otherwise GoApi.Common.VatReturnSpecification.None .
