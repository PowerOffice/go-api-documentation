
BankJournalVoucher
================

Bank Journal Voucher service used to query and create and post [BankJournalVoucher](Type_BankJournalVoucher.md) . (Norwegian: Bankbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.BankJournal .

**Base Url**: `https://api.poweroffice.net/Voucher/BankJournalVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/BankJournalVoucher/](Route_GET_Voucher_BankJournalVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [BankJournalVoucher](Type_BankJournalVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.BankJournal .
[Voucher/BankJournalVoucher/](Route_POST_Voucher_BankJournalVoucher_.md)|POST|Saves a [BankJournalVoucher](Type_BankJournalVoucher.md) and posts it to the general ledger.
[Voucher/BankJournalVoucher/{id}](Route_GET_Voucher_BankJournalVoucher__id__.md)|GET|Gets the specified [BankJournalVoucher](Type_BankJournalVoucher.md) by its identifier.         Will throw an exception if the [BankJournalVoucher](Type_BankJournalVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/BankJournalVoucher/Reverse/{voucherId}](Route_POST_Voucher_BankJournalVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.


