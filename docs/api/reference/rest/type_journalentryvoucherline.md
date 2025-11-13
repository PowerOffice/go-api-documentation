
JournalEntryVoucherLine (JournalEntryVoucherLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Accrual|[AccrualBase](Type_AccrualBase.md)|Gets or sets if GoApi.JournalEntry.JournalEntryVoucherLine.Accrual is used to enable accrual of the invoice. (Norwegian: Periodisering)
Amount|number|The amount on the line in the currency specified on GoApi.JournalEntry.JournalEntryVoucherLine.CurrencyCode or GoApi.JournalEntry.JournalEntryVoucher.CurrencyCode .
CreditAccountCode|number|The code of the account to post the amount in credit. This can contain the code of a [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) , [Customer](Type_Customer.md) , [Supplier](Type_Supplier.md) or [Employee](Type_Employee.md)
CreditAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for the credit account
CreditVatCode|string|The code of the [VatCode](Type_VatCode.md) of the credit entry.     If not provided, the default vat code of the account setting for the CreditAccountCode will be used. The settings can be queried using the GeneralLedgerAccount service.
CreditVatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](Type_VatReturnSpecification.md) on the credit entry. Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .
CurrencyCode|string|The currency code of the voucher line.     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the currency code on the head is always used.
CurrencyRate|number|Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the date on the head is always used.
Date|Date|The date to post this voucher line on.     Can be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.ManualJournal , GoApi.JournalEntry.JournalEntryVoucherType.CashJournal , GoApi.JournalEntry.JournalEntryVoucherType.BankJournal and GoApi.JournalEntry.JournalEntryVoucherType.YearEndJournal .     On vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense the date on the head is always used.
DebitAccountCode|number|The code of the account to post the amount in debit. This can contain the code of a [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) , [Customer](Type_Customer.md) , [Supplier](Type_Supplier.md) or [Employee](Type_Employee.md)
DebitAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for det debit account
DebitVatCode|string|The code of the [VatCode](Type_VatCode.md) of the debit entry.     If not provided, the default vat code of the account setting for the DebitAccountCode will be used. The settings can be queried using the GeneralLedgerAccount service.
DebitVatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets or sets the [VatReturnSpecification](Type_VatReturnSpecification.md) on the debit entry. Entries that are vat reportable might report vat return specifications from 2022.      If not provided, the line will use the vat returns specification that is default on the account of the product if there is any, otherwise GoApi.Common.VatReturnSpecification.None .
DepartmentCode|string|The code of the [Department](Type_Department.md) on the voucher line.
Description|string|Optional description on the line.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InvoiceNo|string|The invoice number that this bank line is related to.     Can only be used on vouchers with voucher type GoApi.JournalEntry.JournalEntryVoucherType.BankJournal .
IsDeleted|boolean|Flag indicating whether a line should be deleted from the [JournalEntryVoucher](Type_JournalEntryVoucher.md) when calling the save method.
LastChanged|Date|Gets the last changed date.
ProductCode|string|Gets or sets the productcode for the line. The [Product](Type_Product.md) must exist in Go in order to be set, and the client need to have product activated in the journal entry settings
ProjectCode|string|The code of the [Project](Type_Project.md) on the voucher line.
Quantity|number|Gets or sets the quantity of the related product, if product is set on the line. If this quantity is set and no product is set, this property will be ignored when posted.
Quantity2|number|Gets or sets the quantity2 of the related product, if product is set on the line. If this quantity2 is set and no product is set, this property will be ignored when posted.
