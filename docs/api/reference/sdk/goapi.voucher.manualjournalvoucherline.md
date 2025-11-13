
ManualJournalVoucherLine
================

Manual Journal Voucher Line representing a voucher line that is posted on a [ManualJournalVoucher](GoApi.Voucher.ManualJournalVoucher.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.Voucher.VoucherLineBase.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
[AccountCode](GoApi.Voucher.VoucherLineBase.AccountCode.md)|Gets or sets the account code this voucher line should be posted on.     The account code can either be the code on a [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) ,     or if the accounting entry is on a sub ledger account, the code provided can be for a [Customer](GoApi.Party.Customer.md) , [Supplier](GoApi.Party.Supplier.md) or [Employee](GoApi.Party.Employee.md) .
[AgricultureDepartment](GoApi.Voucher.VoucherLineBase.AgricultureDepartment.md)|Gets or sets the agricultural department if client is agriculture client
[Amount](GoApi.Voucher.VoucherLineBase.Amount.md)|Gets or sets the total amount of the line. This is the amount to be posted in the same currency as the voucher, or the currency overridden on the line for some voucher types.          The amount is specified VAT inclusive.         Specifying a negative amount here will post the amount as credit and a positive amount will post the amount as debit on all voucher types except [OutgoingInvoiceVoucher](GoApi.Voucher.OutgoingInvoiceVoucher.md) / [OutgoingInvoiceVoucherLine](GoApi.Voucher.OutgoingInvoiceVoucherLine.md) .
[CID](GoApi.Voucher.ManualVoucherLineBase.CID.md)|Gets or sets the customer identification (Norwegian: KID).
[CurrencyCode](GoApi.Voucher.ManualVoucherLineBase.CurrencyCode.md)|Gets or sets the currency code.
[CurrencyRate](GoApi.Voucher.ManualJournalVoucherLine.CurrencyRate.md)|Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).
[CustomMatchingReference](GoApi.Voucher.ManualVoucherLineBase.CustomMatchingReference.md)|Gets or sets the custom matching reference. Voucher lines with this value can be matched with other entries with same CustomMatchingReference.
[Date](GoApi.Voucher.ManualJournalVoucherLine.Date.md)|Gets or sets the voucher line date. The accounting entry for this line will be posted on this date.
[DepartmentCode](GoApi.Voucher.VoucherLineBase.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) .     If set to "-1", this line will not inherit the department set on the voucher level, and no department will be posted to Go for this line
[Description](GoApi.Voucher.VoucherLineBase.Description.md)|Gets or sets the description.
[Dim1Code](GoApi.Voucher.VoucherLineBase.Dim1Code.md)|Gets or sets the code of the custom dimension 1.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim1 will be posted to Go for this line
[Dim2Code](GoApi.Voucher.VoucherLineBase.Dim2Code.md)|Gets or sets the code of the custom dimension 2.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim2 will be posted to Go for this line
[Dim3Code](GoApi.Voucher.VoucherLineBase.Dim3Code.md)|Gets or sets the code of the custom dimension 3.     If set to "-1", this line will not inherit the value set on the voucher level, and no Dim3 will be posted to Go for this line
[ExternalImportLineReference](GoApi.Voucher.VoucherLineBase.ExternalImportLineReference.md)|Gets or sets the external import line reference. Used by external systems to match voucher lines. Max length is 50 characters.
[LocationCode](GoApi.Voucher.VoucherLineBase.LocationCode.md)|Gets or sets the code of the location.     If set to "-1", this line will not inherit the value set on the voucher level, and no Location will be posted to Go for this line
[ProductCode](GoApi.Voucher.VoucherLineBase.ProductCode.md)|Gets or sets the code of the [Product](GoApi.Products.Product.md) .
[ProjectCode](GoApi.Voucher.VoucherLineBase.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) .         If set to "-1", this line will not inherit the project set on the voucher level, and no project will be posted to Go for this line
[Quantity](GoApi.Voucher.VoucherLineBase.Quantity.md)|Gets or sets the quantity.
[VatCode](GoApi.Voucher.VoucherLineBase.VatCode.md)|Gets or sets the code of the [VatCode](GoApi.Dimension.VatCode.md) for this voucher line. Vat will be calculated depending on what code is provided from the total amount inclusive (Amount).     If not provided, the voucher will use default VAT code 0 on the line, resulting in a vat free transaction.
[VatReturnSpecification](GoApi.Voucher.VoucherLineBase.VatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](GoApi.Common.VatReturnSpecification.md) . Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the voucher will use the vat returns specification that is default on the account if there is any, otherwise GoApi.Common.VatReturnSpecification.None .

### Constructors
Name | Description
:----|:------------
[ManualJournalVoucherLine()](GoApi.Voucher.ManualJournalVoucherLine.ManualJournalVoucherLine__.md)|



