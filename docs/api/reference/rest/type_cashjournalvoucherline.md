
CashJournalVoucherLine (CashJournalVoucherLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AccountCode|number|Gets or sets the account code this voucher line should be posted on.     The account code can either be the code on a [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) ,     or if the accounting entry is on a sub ledger account, the code provided can be for a [Customer](Type_Customer.md) , [Supplier](Type_Supplier.md) or [Employee](Type_Employee.md) .
AgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the agricultural department if client is agriculture client
Amount|number|Gets or sets the total amount of the line. This is the amount to be posted in the same currency as the voucher, or the currency overridden on the line for some voucher types.          The amount is specified VAT inclusive.         Specifying a negative amount here will post the amount as credit and a positive amount will post the amount as debit on all voucher types except [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) / [OutgoingInvoiceVoucherLine](Type_OutgoingInvoiceVoucherLine.md) .
CID|string|Gets or sets the customer identification (Norwegian: KID).
CurrencyCode|string|Gets or sets the currency code.
CurrencyRate|number|Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).
CustomMatchingReference|string|Gets or sets the custom matching reference. Voucher lines with this value can be matched with other entries with same CustomMatchingReference.
Date|Date|Gets or sets the voucher line date. The accounting entry for this line will be posted on this date.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) .     If set to "-1", this line will not inherit the department set on the voucher level, and no department will be posted to Go for this line
Description|string|Gets or sets the description.
Dim1Code|string|Gets or sets the code of the custom dimension 1.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim1 will be posted to Go for this line
Dim2Code|string|Gets or sets the code of the custom dimension 2.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim2 will be posted to Go for this line
Dim3Code|string|Gets or sets the code of the custom dimension 3.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim3 will be posted to Go for this line
ExternalImportLineReference|string|Gets or sets the external import line reference. Used by external systems to match voucher lines. Max length is 50 characters.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
LocationCode|string|Gets or sets the code of the location.     If set to "-1", this line will not inherit the value set on the voucher level, and no Location will be posted to Go for this line
ProductCode|string|Gets or sets the code of the [Product](Type_Product.md) .
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) .         If set to "-1", this line will not inherit the project set on the voucher level, and no project will be posted to Go for this line
Quantity|number|Gets or sets the quantity.
VatCode|string|Gets or sets the code of the [VatCode](Type_VatCode.md) for this voucher line. Vat will be calculated depending on what code is provided from the total amount inclusive (Amount).     If not provided, the voucher will use default VAT code 0 on the line, resulting in a vat free transaction.
VatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](Type_VatReturnSpecification.md) . Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the voucher will use the vat returns specification that is default on the account if there is any, otherwise GoApi.Common.VatReturnSpecification.None .
