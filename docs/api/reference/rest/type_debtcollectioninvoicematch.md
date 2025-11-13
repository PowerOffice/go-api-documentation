
DebtCollectionInvoiceMatch (DebtCollectionInvoiceMatch)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Amount|number|Gets the amount in local currency.
CID|string|Gets the customer identification code (CID) (Norwegian: KID).
CreatedFromImportId|string (Guid)|Gets the identifier of the import journal that created this voucher. If this voucher is not created from an import this value will be null.
CurrencyAmount|number|Gets the amount in the currency specified.
CurrencyCode|string|Gets the currency code.
CustomerCode|number|Gets the customer code.
ExternalImportReference|string|Gets the ExternalImportReference that was provided when creating the invoice.
Id|number|Gets the identifier.
ImportedVoucherNo|number|Gets the voucher number of the lines in the import journal that created this voucher. If this voucher is not created from an import this value will be null.
IsWriteOff|boolean|Gets a value indicating whether this customer ledger entry is due to a balance write-off (Norwegian: Tapsføring).
LastChanged|Date|Gets the last changed date.
PostingDate|Date|Gets the posting date for the accounting entry.
VoucherDate|Date|Gets the voucher date.
VoucherId|string (Guid)|Gets the identifier of the Voucher.
VoucherNo|number|Gets the voucher number.
VoucherType|[VoucherType](Type_VoucherType.md)|Gets the voucher type.
