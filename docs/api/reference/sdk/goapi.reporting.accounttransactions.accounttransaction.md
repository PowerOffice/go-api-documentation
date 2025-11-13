
AccountTransaction
================

AccountTransaction representing an accounting entry. This is a single posted amount on a [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.Reporting.AccountTransactions.AccountTransaction.Id.md)|Gets or sets a value that uniquely identifies the accounting entry
[AccountCode](GoApi.Reporting.AccountTransactions.AccountTransaction.AccountCode.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md)
[AgricultureDepartment](GoApi.Reporting.AccountTransactions.AccountTransaction.AgricultureDepartment.md)|Gets or sets the agricultural department this account belongs to
[Amount](GoApi.Reporting.AccountTransactions.AccountTransaction.Amount.md)|Gets or sets the posted amount on the account. This amount is in the local currency of the client.
[BankTransferId](GoApi.Reporting.AccountTransactions.AccountTransaction.BankTransferId.md)|Gets the identifier of the [BankTransfer](GoApi.Bank.BankTransfer.md) . If provided on an accounting entry, this accounting entry is created from a remittance of a bank transfer with a given id.
[CorrectionOfVoucherNo](GoApi.Reporting.AccountTransactions.AccountTransaction.CorrectionOfVoucherNo.md)|Gets the voucher number of the original voucher that has been corrected by this voucher.
[CreatedDate](GoApi.Reporting.AccountTransactions.AccountTransaction.CreatedDate.md)|Gets the created date.
[CreatedFromImportJournalId](GoApi.Reporting.AccountTransactions.AccountTransaction.CreatedFromImportJournalId.md)|Gets the identifier of the [Import](GoApi.Import.Import.md) that created this account transaction.
[CurrencyAmount](GoApi.Reporting.AccountTransactions.AccountTransaction.CurrencyAmount.md)|Gets or sets the currency amount.
[CurrencyCode](GoApi.Reporting.AccountTransactions.AccountTransaction.CurrencyCode.md)|Gets or sets the currency code.
[CustomerAccountNo](GoApi.Reporting.AccountTransactions.AccountTransaction.CustomerAccountNo.md)|Account number of the [Customer](GoApi.Party.Customer.md) this account transaction is posted on that is provided if the account is a customer sub ledger account.
[CustomMatchingReference](GoApi.Reporting.AccountTransactions.AccountTransaction.CustomMatchingReference.md)|Gets the custom matching reference set on the transaction. This property will only have value on entries that are posted on a sub ledger account created through the API or Import with CustomMatchingReference specified.
[Date](GoApi.Reporting.AccountTransactions.AccountTransaction.Date.md)|Gets or sets the posting date.
[DepartmentCode](GoApi.Reporting.AccountTransactions.AccountTransaction.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md)
[Description](GoApi.Reporting.AccountTransactions.AccountTransaction.Description.md)|Gets or sets the description.
[Dim1Code](GoApi.Reporting.AccountTransactions.AccountTransaction.Dim1Code.md)|Gets or sets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 1
[Dim2Code](GoApi.Reporting.AccountTransactions.AccountTransaction.Dim2Code.md)|Gets or sets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 2
[Dim3Code](GoApi.Reporting.AccountTransactions.AccountTransaction.Dim3Code.md)|Gets or sets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 3
[DocumentNo](GoApi.Reporting.AccountTransactions.AccountTransaction.DocumentNo.md)|Gets or sets the document no of the voucher. On invoices this property will contain the invoice number.
[EmployeeAccountNo](GoApi.Reporting.AccountTransactions.AccountTransaction.EmployeeAccountNo.md)|Account number of the [Employee](GoApi.Party.Employee.md) this account transaction is posted on that is provided if the account is a employee subledger account.
[ExternalImportReference](GoApi.Reporting.AccountTransactions.AccountTransaction.ExternalImportReference.md)|Gets the ExternalImportReference. Can be used to correlate/duplicate check.
[HasVoucherDocumentation](GoApi.Reporting.AccountTransactions.AccountTransaction.HasVoucherDocumentation.md)|Gets a value indicating if the voucher has original documentation.
[ImportedVoucherNo](GoApi.Reporting.AccountTransactions.AccountTransaction.ImportedVoucherNo.md)|Gets the number that the voucher that generated this accounting entry has in an external system. This property will only contain a value on imported vouchers.
[IsCreatedFromEhf](GoApi.Reporting.AccountTransactions.AccountTransaction.IsCreatedFromEhf.md)|Gets or sets a value indicating whether this account transaction is created from ehf.
[IsNoteMainEntry](GoApi.Reporting.AccountTransactions.AccountTransaction.IsNoteMainEntry.md)|Gets whether the entry is the main sub ledger entry created from the "head" of the voucher. Relevant for supplier invoices, which might have several supplier transactions, but only one being the main supplier entry for the invoice.
[IsReversed](GoApi.Reporting.AccountTransactions.AccountTransaction.IsReversed.md)|Gets if this voucher has been reversed by another voucher.
[LastChanged](GoApi.Reporting.AccountTransactions.AccountTransaction.LastChanged.md)|Gets the last changed date.
[LocationCode](GoApi.Reporting.AccountTransactions.AccountTransaction.LocationCode.md)|Gets or sets the code of the [Location](GoApi.Projects.Location.md)
[OurReferenceEmployeeCode](GoApi.Reporting.AccountTransactions.AccountTransaction.OurReferenceEmployeeCode.md)|Gets the employee code for the salesperson on the transaction.
[ProductCode](GoApi.Reporting.AccountTransactions.AccountTransaction.ProductCode.md)|Gets or sets the code of the [Product](GoApi.Products.Product.md) on the transaction.
[ProjectCode](GoApi.Reporting.AccountTransactions.AccountTransaction.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) on the transaction.
[Quantity](GoApi.Reporting.AccountTransactions.AccountTransaction.Quantity.md)|Gets the quantity that was set on the voucher line generating this account transaction.
[Quantity2](GoApi.Reporting.AccountTransactions.AccountTransaction.Quantity2.md)|Gets the quantity2 that was set on the voucher line generating this account transaction.
[ReversedVoucherNo](GoApi.Reporting.AccountTransactions.AccountTransaction.ReversedVoucherNo.md)|Gets the voucher number of the original voucher that has been reversed by thin voucher.     This property is only available for reversal vouchers (type 99), and link the reversal voucher to the original voucher that has been reversed in Go.
[SubLedgerEntryId](GoApi.Reporting.AccountTransactions.AccountTransaction.SubLedgerEntryId.md)|Gets the sub ledger entry id. If this AccountTransaction is on a sub ledger account this will be the value of the sub ledger entry related to this transaction.
[SupplierAccountNo](GoApi.Reporting.AccountTransactions.AccountTransaction.SupplierAccountNo.md)|Account number of the [Supplier](GoApi.Party.Supplier.md) this account transaction is posted on that is provided if the account is a supplier sub ledger account.
[Text](GoApi.Reporting.AccountTransactions.AccountTransaction.Text.md)|Gets or sets the text.
[VatAmount](GoApi.Reporting.AccountTransactions.AccountTransaction.VatAmount.md)|Gets or sets the vat amount on this transaction.
[VatCode](GoApi.Reporting.AccountTransactions.AccountTransaction.VatCode.md)|Gets or sets the code of the [VatCode](GoApi.Dimension.VatCode.md) on this transaction.
[VatRate](GoApi.Reporting.AccountTransactions.AccountTransaction.VatRate.md)|Gets or sets the vat rate.
[VatReturnSpecification](GoApi.Reporting.AccountTransactions.AccountTransaction.VatReturnSpecification.md)|Gets the vat return specification.
[VoucherCID](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherCID.md)|Gets or sets the cid of the voucher this transaction is on. (Norwegian: KID)
[VoucherCreditNoteReference](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherCreditNoteReference.md)|Gets or sets the vouchers credit note reference.
[VoucherDate](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherDate.md)|Gets the date of the voucher. This represents the date of the voucher, the document date of an invoice for instance,     and may differ from the transaction dates for the voucher.     Always present on transactions.
[VoucherDueDate](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherDueDate.md)|Gets or sets the due date of the voucher this transaction is on.
[VoucherId](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherId.md)|Gets or sets the identifier of the Voucher that generated this account transaction.
[VoucherImagesCount](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherImagesCount.md)|Number of images available for the voucher this transaction is for (use GoApi.Common.BlobService.GetVoucherImage(System.Int64,System.Int32) to download image).
[VoucherNo](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherNo.md)|Gets or sets the number of the voucher that generated this accounting entry.
[VoucherReference](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherReference.md)|Gets or sets the voucher reference.
[VoucherType](GoApi.Reporting.AccountTransactions.AccountTransaction.VoucherType.md)|Gets or sets the type of the voucher that generated this accounting entry.

### Constructors
Name | Description
:----|:------------
[AccountTransaction()](GoApi.Reporting.AccountTransactions.AccountTransaction.AccountTransaction__.md)|



