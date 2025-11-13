
AccountTransaction (AccountTransaction)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AccountCode|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md)
AgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the agricultural department this account belongs to
Amount|number|Gets or sets the posted amount on the account. This amount is in the local currency of the client.
BankTransferId|string (Guid)|Gets the identifier of the [BankTransfer](Type_BankTransfer.md) . If provided on an accounting entry, this accounting entry is created from a remittance of a bank transfer with a given id.
CorrectionOfVoucherNo|number|Gets the voucher number of the original voucher that has been corrected by this voucher.
CreatedDate|Date|Gets the created date.
CreatedFromImportJournalId|string (Guid)|Gets the identifier of the [Import](Type_Import.md) that created this account transaction.
CurrencyAmount|number|Gets or sets the currency amount.
CurrencyCode|string|Gets or sets the currency code.
CustomerAccountNo|number|Account number of the [Customer](Type_Customer.md) this account transaction is posted on that is provided if the account is a customer sub ledger account.
CustomMatchingReference|string|Gets the custom matching reference set on the transaction. This property will only have value on entries that are posted on a sub ledger account created through the API or Import with CustomMatchingReference specified.
Date|Date|Gets or sets the posting date.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md)
Description|string|Gets or sets the description.
Dim1Code|string|Gets or sets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 1
Dim2Code|string|Gets or sets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 2
Dim3Code|string|Gets or sets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 3
DocumentNo|string|Gets or sets the document no of the voucher. On invoices this property will contain the invoice number.
EmployeeAccountNo|number|Account number of the [Employee](Type_Employee.md) this account transaction is posted on that is provided if the account is a employee subledger account.
ExternalImportReference|string|Gets the ExternalImportReference. Can be used to correlate/duplicate check.
HasVoucherDocumentation|boolean|Gets a value indicating if the voucher has original documentation.
Id|number|Gets or sets a value that uniquely identifies the accounting entry
ImportedVoucherNo|number|Gets the number that the voucher that generated this accounting entry has in an external system. This property will only contain a value on imported vouchers.
IsCreatedFromEhf|boolean|Gets or sets a value indicating whether this account transaction is created from ehf.
IsNoteMainEntry|boolean|Gets whether the entry is the main sub ledger entry created from the "head" of the voucher. Relevant for supplier invoices, which might have several supplier transactions, but only one being the main supplier entry for the invoice.
IsReversed|boolean|Gets if this voucher has been reversed by another voucher.
LastChanged|Date|Gets the last changed date.
LocationCode|string|Gets or sets the code of the [Location](Type_Location.md)
OurReferenceEmployeeCode|number|Gets the employee code for the salesperson on the transaction.
ProductCode|string|Gets or sets the code of the [Product](Type_Product.md) on the transaction.
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) on the transaction.
Quantity|number|Gets the quantity that was set on the voucher line generating this account transaction.
Quantity2|number|Gets the quantity2 that was set on the voucher line generating this account transaction.
ReversedVoucherNo|number|Gets the voucher number of the original voucher that has been reversed by thin voucher.     This property is only available for reversal vouchers (type 99), and link the reversal voucher to the original voucher that has been reversed in Go.
SubLedgerEntryId|number|Gets the sub ledger entry id. If this AccountTransaction is on a sub ledger account this will be the value of the sub ledger entry related to this transaction.
SupplierAccountNo|number|Account number of the [Supplier](Type_Supplier.md) this account transaction is posted on that is provided if the account is a supplier sub ledger account.
Text|string|Gets or sets the text.
VatAmount|number|Gets or sets the vat amount on this transaction.
VatCode|string|Gets or sets the code of the [VatCode](Type_VatCode.md) on this transaction.
VatRate|number|Gets or sets the vat rate.
VatReturnSpecification|[VatReturnSpecification](Type_VatReturnSpecification.md)|Gets the vat return specification.
VoucherCID|string|Gets or sets the cid of the voucher this transaction is on. (Norwegian: KID)
VoucherCreditNoteReference|string|Gets or sets the vouchers credit note reference.
VoucherDate|Date|Gets the date of the voucher. This represents the date of the voucher, the document date of an invoice for instance,     and may differ from the transaction dates for the voucher.     Always present on transactions.
VoucherDueDate|Date|Gets or sets the due date of the voucher this transaction is on.
VoucherId|string (Guid)|Gets or sets the identifier of the Voucher that generated this account transaction.
VoucherImagesCount|number|Number of images available for the voucher this transaction is for (use GoApi.Common.BlobService.GetVoucherImage(System.Int64,System.Int32) to download image).
VoucherNo|number|Gets or sets the number of the voucher that generated this accounting entry.
VoucherReference|string|Gets or sets the voucher reference.
VoucherType|[VoucherType](Type_VoucherType.md)|Gets or sets the type of the voucher that generated this accounting entry.
