
JournalEntryVoucherLine
================

Journal entry voucher line representing a line on a [JournalEntryVoucher](GoApi.JournalEntry.JournalEntryVoucher.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.JournalEntry.JournalEntryVoucherLine.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Accrual](GoApi.JournalEntry.JournalEntryVoucherLine.Accrual.md)|Gets or sets if GoApi.JournalEntry.JournalEntryVoucherLine.Accrual is used to enable accrual of the invoice. (Norwegian: Periodisering)
[Amount](GoApi.JournalEntry.JournalEntryVoucherLine.Amount.md)|The amount on the line in the currency specified on GoApi.JournalEntry.JournalEntryVoucherLine.CurrencyCode or GoApi.JournalEntry.JournalEntryVoucher.CurrencyCode .
[CreditAccountCode](GoApi.JournalEntry.JournalEntryVoucherLine.CreditAccountCode.md)|The code of the account to post the amount in credit. This can contain the code of a [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) , [Customer](GoApi.Party.Customer.md) , [Supplier](GoApi.Party.Supplier.md) or [Employee](GoApi.Party.Employee.md)
[CreditAgricultureDepartment](GoApi.JournalEntry.JournalEntryVoucherLine.CreditAgricultureDepartment.md)|The agriculture department for the credit account
[CreditVatCode](GoApi.JournalEntry.JournalEntryVoucherLine.CreditVatCode.md)|The code of the [VatCode](GoApi.Dimension.VatCode.md) of the credit entry.     If not provided, the default vat code of the account setting for the CreditAccountCode will be used. The settings can be queried using the GeneralLedgerAccount service.
[CreditVatReturnSpecification](GoApi.JournalEntry.JournalEntryVoucherLine.CreditVatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](GoApi.Common.VatReturnSpecification.md) on the credit entry. Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .
[CurrencyCode](GoApi.JournalEntry.JournalEntryVoucherLine.CurrencyCode.md)|The currency code of the voucher line.     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the currency code on the head is always used.
[CurrencyRate](GoApi.JournalEntry.JournalEntryVoucherLine.CurrencyRate.md)|Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the date on the head is always used.
[Date](GoApi.JournalEntry.JournalEntryVoucherLine.Date.md)|The date to post this voucher line on.     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the date on the head is always used.
[DebitAccountCode](GoApi.JournalEntry.JournalEntryVoucherLine.DebitAccountCode.md)|The code of the account to post the amount in debit. This can contain the code of a [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) , [Customer](GoApi.Party.Customer.md) , [Supplier](GoApi.Party.Supplier.md) or [Employee](GoApi.Party.Employee.md)
[DebitAgricultureDepartment](GoApi.JournalEntry.JournalEntryVoucherLine.DebitAgricultureDepartment.md)|The agriculture department for det debit account
[DebitVatCode](GoApi.JournalEntry.JournalEntryVoucherLine.DebitVatCode.md)|The code of the [VatCode](GoApi.Dimension.VatCode.md) of the debit entry.     If not provided, the default vat code of the account setting for the DebitAccountCode will be used. The settings can be queried using the GeneralLedgerAccount service.
[DebitVatReturnSpecification](GoApi.JournalEntry.JournalEntryVoucherLine.DebitVatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](GoApi.Common.VatReturnSpecification.md) on the debit entry. Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .
[DepartmentCode](GoApi.JournalEntry.JournalEntryVoucherLine.DepartmentCode.md)|The code of the [Department](GoApi.Dimension.Department.md) on the voucher line.
[Description](GoApi.JournalEntry.JournalEntryVoucherLine.Description.md)|Optional description on the line.
[InvoiceNo](GoApi.JournalEntry.JournalEntryVoucherLine.InvoiceNo.md)|The invoice number that this bank line is related to.     Can only be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.BankJournal .
[IsDeleted](GoApi.JournalEntry.JournalEntryVoucherLine.IsDeleted.md)|Flag indicating whether a line should be deleted from the [JournalEntryVoucher](GoApi.JournalEntry.JournalEntryVoucher.md) when calling the save method.
[LastChanged](GoApi.JournalEntry.JournalEntryVoucherLine.LastChanged.md)|Gets the last changed date.
[ProductCode](GoApi.JournalEntry.JournalEntryVoucherLine.ProductCode.md)|Gets or sets the productcode for the line. The [Product](GoApi.Products.Product.md) must exist in Go in order to be set, and the client need to have product activated in the journal entry settings
[ProjectCode](GoApi.JournalEntry.JournalEntryVoucherLine.ProjectCode.md)|The code of the [Project](GoApi.Projects.Project.md) on the voucher line.
[Quantity](GoApi.JournalEntry.JournalEntryVoucherLine.Quantity.md)|Gets or sets the quantity of the related product, if product is set on the line. If this quantity is set and no product is set, this property will be ignored when posted.
[Quantity2](GoApi.JournalEntry.JournalEntryVoucherLine.Quantity2.md)|Gets or sets the quantity2 of the related product, if product is set on the line. If this quantity2 is set and no product is set, this property will be ignored when posted.

### Constructors
Name | Description
:----|:------------
[JournalEntryVoucherLine()](GoApi.JournalEntry.JournalEntryVoucherLine.JournalEntryVoucherLine__.md)|



