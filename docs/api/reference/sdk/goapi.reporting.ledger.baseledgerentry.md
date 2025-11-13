
BaseLedgerEntry
================

Base class for [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) and [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md)


### Properties
Name | Description
:----|:------------
[Amount](GoApi.Reporting.Ledger.BaseLedgerEntry.Amount.md)|Gets or sets the posted amount.
[Balance](GoApi.Reporting.Ledger.BaseLedgerEntry.Balance.md)|Gets or sets the balance (remaining amount to be paid) in the clients local currency.
[CID](GoApi.Reporting.Ledger.BaseLedgerEntry.CID.md)|Gets or sets the cid. (Norwegian: KID)
[CorrectionOfVoucherNo](GoApi.Reporting.Ledger.BaseLedgerEntry.CorrectionOfVoucherNo.md)|Gets the voucher number of the original voucher that has been corrected by this voucher.
[CreatedDate](GoApi.Reporting.Ledger.BaseLedgerEntry.CreatedDate.md)|Gets the created date.
[CreatedFromImportJournalId](GoApi.Reporting.Ledger.BaseLedgerEntry.CreatedFromImportJournalId.md)|Gets the id of the [Import](GoApi.Import.Import.md) that created this sub ledger entry.
[CurrencyAmount](GoApi.Reporting.Ledger.BaseLedgerEntry.CurrencyAmount.md)|Gets or sets the currency amount.
[CurrencyCode](GoApi.Reporting.Ledger.BaseLedgerEntry.CurrencyCode.md)|Gets or sets the currency code.
[CustomMatchingReference](GoApi.Reporting.Ledger.BaseLedgerEntry.CustomMatchingReference.md)|Gets the custom matching reference set on the transaction. This property will only have value on entries created through the API or Import with CustomMatchingReference specified.
[DebtCollectionCaseCode](GoApi.Reporting.Ledger.BaseLedgerEntry.DebtCollectionCaseCode.md)|
[DebtCollectionCaseId](GoApi.Reporting.Ledger.BaseLedgerEntry.DebtCollectionCaseId.md)|
[DepartmentCode](GoApi.Reporting.Ledger.BaseLedgerEntry.DepartmentCode.md)|Gets the department code associated with the entry, if set in Go.
[DepartmentName](GoApi.Reporting.Ledger.BaseLedgerEntry.DepartmentName.md)|Gets the name of the department associated with the entry, if set in Go
[Dim1Code](GoApi.Reporting.Ledger.BaseLedgerEntry.Dim1Code.md)|Gets the custom dimension 1 code associated with the entry, if set in Go.
[Dim1Name](GoApi.Reporting.Ledger.BaseLedgerEntry.Dim1Name.md)|Gets the name of the custom dimension 1 associated with the entry, if set in Go
[Dim2Code](GoApi.Reporting.Ledger.BaseLedgerEntry.Dim2Code.md)|Gets the custom dimension 2 code associated with the entry, if set in Go.
[Dim2Name](GoApi.Reporting.Ledger.BaseLedgerEntry.Dim2Name.md)|Gets the name of the custom dimension 2 associated with the entry, if set in Go
[Dim3Code](GoApi.Reporting.Ledger.BaseLedgerEntry.Dim3Code.md)|Gets the custom dimension 3 code associated with the entry, if set in Go.
[Dim3Name](GoApi.Reporting.Ledger.BaseLedgerEntry.Dim3Name.md)|Gets the name of the custom dimension 3 associated with the entry, if set in Go
[DocumentNo](GoApi.Reporting.Ledger.BaseLedgerEntry.DocumentNo.md)|Gets or sets the document no. This value is usually representing invoice number.
[DueDate](GoApi.Reporting.Ledger.BaseLedgerEntry.DueDate.md)|Gets or sets the due date.
[ExternalImportReference](GoApi.Reporting.Ledger.BaseLedgerEntry.ExternalImportReference.md)|Gets the ExternalImportReference. Can be used to correlate/duplicate check.
[FactoringIntegrationName](GoApi.Reporting.Ledger.BaseLedgerEntry.FactoringIntegrationName.md)|
[FactoringInvoiceStatus](GoApi.Reporting.Ledger.BaseLedgerEntry.FactoringInvoiceStatus.md)|
[Id](GoApi.Reporting.Ledger.BaseLedgerEntry.Id.md)|Gets or sets the identifier.
[InvoiceDebtCollectionStatus](GoApi.Reporting.Ledger.BaseLedgerEntry.InvoiceDebtCollectionStatus.md)|
[IsCreatedByCurrentIntegration](GoApi.Reporting.Ledger.BaseLedgerEntry.IsCreatedByCurrentIntegration.md)|Gets whether the ledger entry is created by the integration currently communicating with the API. Will be true for all entries that are created by the same integration user (same Application Key) as the integration currently authorized.
[IsReversed](GoApi.Reporting.Ledger.BaseLedgerEntry.IsReversed.md)|Gets if this voucher has been reversed by another voucher.
[LastChanged](GoApi.Reporting.Ledger.BaseLedgerEntry.LastChanged.md)|Gets the last changed date.
[LocationCode](GoApi.Reporting.Ledger.BaseLedgerEntry.LocationCode.md)|Gets the  location code associated with the entry, if set in Go.
[LocationName](GoApi.Reporting.Ledger.BaseLedgerEntry.LocationName.md)|Gets the name of the location associated with the entry, if set in Go
[MatchId](GoApi.Reporting.Ledger.BaseLedgerEntry.MatchId.md)|Gets or sets the match identifier. Sub ledger entries that are matched together will have the same MatchId.
[PostingDate](GoApi.Reporting.Ledger.BaseLedgerEntry.PostingDate.md)|Gets or sets the posting date.
[ProjectCode](GoApi.Reporting.Ledger.BaseLedgerEntry.ProjectCode.md)|Gets the project code associated with the entry, if set in Go.
[ProjectName](GoApi.Reporting.Ledger.BaseLedgerEntry.ProjectName.md)|Gets the name of the project associated with the entry, if set in Go.
[ReversedVoucherNo](GoApi.Reporting.Ledger.BaseLedgerEntry.ReversedVoucherNo.md)|Gets the voucher number of the original voucher that has been reversed by thin voucher.     This property is only available for reversal vouchers (type 99), and link the reversal voucher to the original voucher that has been reversed in Go.
[VoucherDate](GoApi.Reporting.Ledger.BaseLedgerEntry.VoucherDate.md)|Gets or sets the voucher date.
[VoucherId](GoApi.Reporting.Ledger.BaseLedgerEntry.VoucherId.md)|Gets or sets the identifier of the voucher that this sub ledger entry is on.
[VoucherNo](GoApi.Reporting.Ledger.BaseLedgerEntry.VoucherNo.md)|Gets or sets the voucher no.
[VoucherType](GoApi.Reporting.Ledger.BaseLedgerEntry.VoucherType.md)|Gets or sets the type of the voucher.




