
SupplierLedgerEntry (SupplierLedgerEntry)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Amount|number|Gets or sets the posted amount.
Balance|number|Gets or sets the balance (remaining amount to be paid) in the clients local currency.
CID|string|Gets or sets the cid. (Norwegian: KID)
CorrectionOfVoucherNo|number|Gets the voucher number of the original voucher that has been corrected by this voucher.
CreatedDate|Date|Gets the created date.
CreatedFromImportJournalId|string (Guid)|Gets the id of the [Import](Type_Import.md) that created this sub ledger entry.
CurrencyAmount|number|Gets or sets the currency amount.
CurrencyCode|string|Gets or sets the currency code.
CustomMatchingReference|string|Gets the custom matching reference set on the transaction. This property will only have value on entries created through the API or Import with CustomMatchingReference specified.
DebtCollectionCaseCode|string|
DebtCollectionCaseId|string (Guid)|
DepartmentCode|string|Gets the department code associated with the entry, if set in Go.
DepartmentName|string|Gets the name of the department associated with the entry, if set in Go
Dim1Code|string|Gets the custom dimension 1 code associated with the entry, if set in Go.
Dim1Name|string|Gets the name of the custom dimension 1 associated with the entry, if set in Go
Dim2Code|string|Gets the custom dimension 2 code associated with the entry, if set in Go.
Dim2Name|string|Gets the name of the custom dimension 2 associated with the entry, if set in Go
Dim3Code|string|Gets the custom dimension 3 code associated with the entry, if set in Go.
Dim3Name|string|Gets the name of the custom dimension 3 associated with the entry, if set in Go
DocumentNo|string|Gets or sets the document no. This value is usually representing invoice number.
DueDate|Date|Gets or sets the due date.
ExternalImportReference|string|Gets the ExternalImportReference. Can be used to correlate/duplicate check.
FactoringIntegrationName|string|
FactoringInvoiceStatus|number|
Id|number|Gets or sets the identifier.
InvoiceDebtCollectionStatus|number|
IsCreatedByCurrentIntegration|boolean|Gets whether the ledger entry is created by the integration currently communicating with the API. Will be true for all entries that are created by the same integration user (same Application Key) as the integration currently authorized.
IsCreatedFromEhf|boolean|Gets or sets a value indicating whether this instance is created from ehf.         Note: This property cannot be used in odata filtering.
IsReversed|boolean|Gets if this voucher has been reversed by another voucher.
IsWriteOff|boolean|Gets a flag indicating whether the entry is created by the write off functionality in Go. Such entries are not payments, but an accounting routine writing off an open item.
LastChanged|Date|Gets the last changed date.
LocationCode|string|Gets the  location code associated with the entry, if set in Go.
LocationName|string|Gets the name of the location associated with the entry, if set in Go
MatchId|number|Gets or sets the match identifier. Sub ledger entries that are matched together will have the same MatchId.
PostingDate|Date|Gets or sets the posting date.
ProjectCode|string|Gets the project code associated with the entry, if set in Go.
ProjectName|string|Gets the name of the project associated with the entry, if set in Go.
ReversedVoucherNo|number|Gets the voucher number of the original voucher that has been reversed by thin voucher.     This property is only available for reversal vouchers (type 99), and link the reversal voucher to the original voucher that has been reversed in Go.
Supplier|[Supplier](Type_Supplier.md)|OBSOLETE - Gets or sets the supplier.         Note: Returned object only contains Id, Code and Name of Supplier, all other properties are empty (SupplierCreatedDate, CreatedDate and LastChanged are default value since they are not nullable).         Use Supplier.Id (or SupplierCode) and query the Supplier endpoint to get full Supplier object.
SupplierCode|number|Gets the code of the GoApi.Reporting.Ledger.SupplierLedgerEntry.Supplier , used for filtering since OData does not support filtering by sub-data objects like [Supplier](Type_Supplier.md) code.
VoucherDate|Date|Gets or sets the voucher date.
VoucherId|string (Guid)|Gets or sets the identifier of the voucher that this sub ledger entry is on.
VoucherNo|number|Gets or sets the voucher no.
VoucherType|[VoucherType](Type_VoucherType.md)|Gets or sets the type of the voucher.
