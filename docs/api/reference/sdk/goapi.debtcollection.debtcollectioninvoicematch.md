
DebtCollectionInvoiceMatch
================

Debt collection invoice match representing an accounting entry on a [Customer](GoApi.Party.Customer.md) account that is matched with an [DebtCollectionInvoice](GoApi.DebtCollection.DebtCollectionInvoice.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.DebtCollection.DebtCollectionInvoiceMatch.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
[Amount](GoApi.DebtCollection.DebtCollectionInvoiceMatch.Amount.md)|Gets the amount in local currency.
[CID](GoApi.DebtCollection.DebtCollectionInvoiceMatch.CID.md)|Gets the customer identification code (CID) (Norwegian: KID).
[CreatedFromImportId](GoApi.DebtCollection.DebtCollectionInvoiceMatch.CreatedFromImportId.md)|Gets the identifier of the [Import](GoApi.Import.Import.md) that created this voucher. If this voucher is not created from an [Import](GoApi.Import.Import.md) this value will be null.
[CurrencyAmount](GoApi.DebtCollection.DebtCollectionInvoiceMatch.CurrencyAmount.md)|Gets the amount in the currency specified on GoApi.DebtCollection.DebtCollectionInvoiceMatch.CurrencyCode .
[CurrencyCode](GoApi.DebtCollection.DebtCollectionInvoiceMatch.CurrencyCode.md)|Gets the currency code.
[CustomerCode](GoApi.DebtCollection.DebtCollectionInvoiceMatch.CustomerCode.md)|Gets the code of the [Customer](GoApi.Party.Customer.md) .
[ExternalImportReference](GoApi.DebtCollection.DebtCollectionInvoiceMatch.ExternalImportReference.md)|Gets the ExternalImportReference that was provided when creating the invoice. This value will only have a value if the voucher was created outside PowerOffice Go and imported with a reference.
[ImportedVoucherNo](GoApi.DebtCollection.DebtCollectionInvoiceMatch.ImportedVoucherNo.md)|Gets the voucher number of the lines in the [Import](GoApi.Import.Import.md) that created this voucher. If this voucher is not created from an [Import](GoApi.Import.Import.md) this value will be null.
[IsNoteMainEntry](GoApi.DebtCollection.DebtCollectionInvoiceMatch.IsNoteMainEntry.md)|Gets a value indicating whether this instance is the main subledger entry for a note.
[IsWriteOff](GoApi.DebtCollection.DebtCollectionInvoiceMatch.IsWriteOff.md)|Gets a value indicating whether this accounting entry is due to a balance write-off (Norwegian: Tapsføring).
[LastChanged](GoApi.DebtCollection.DebtCollectionInvoiceMatch.LastChanged.md)|Gets the last changed date.
[MatchId](GoApi.DebtCollection.DebtCollectionInvoiceMatch.MatchId.md)|Gets the MatchId. This is the id used to correlate the main subledger entry with corresponding accounting entries.
[PaidFromAccount](GoApi.DebtCollection.DebtCollectionInvoiceMatch.PaidFromAccount.md)|Gets the account code the OCR payment was paid from. Only present on OCR vouchers.
[PostingDate](GoApi.DebtCollection.DebtCollectionInvoiceMatch.PostingDate.md)|Gets the posting date for the accounting entry.
[VoucherDate](GoApi.DebtCollection.DebtCollectionInvoiceMatch.VoucherDate.md)|Gets the voucher date.
[VoucherId](GoApi.DebtCollection.DebtCollectionInvoiceMatch.VoucherId.md)|Gets the identifier of the Voucher this accounting entry is on.
[VoucherNo](GoApi.DebtCollection.DebtCollectionInvoiceMatch.VoucherNo.md)|Gets the voucher number.
[VoucherType](GoApi.DebtCollection.DebtCollectionInvoiceMatch.VoucherType.md)|Gets the voucher type.

### Constructors
Name | Description
:----|:------------
[DebtCollectionInvoiceMatch()](GoApi.DebtCollection.DebtCollectionInvoiceMatch.DebtCollectionInvoiceMatch__.md)|



