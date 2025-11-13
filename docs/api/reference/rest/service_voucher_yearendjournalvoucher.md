
YearEndJournalVoucher
================

Year End Journal Voucher service used to query and create and post [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) . (Norwegian: Årsavslutningsbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.YearEndJournal .

**Base Url**: `https://api.poweroffice.net/Voucher/YearEndJournalVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/YearEndJournalVoucher/](Route_GET_Voucher_YearEndJournalVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.YearEndJournal .
[Voucher/YearEndJournalVoucher/](Route_POST_Voucher_YearEndJournalVoucher_.md)|POST|Saves a [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) and posts it to the general ledger.
[Voucher/YearEndJournalVoucher/{id}](Route_GET_Voucher_YearEndJournalVoucher__id__.md)|GET|Gets the specified [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) by its identifier.         Will throw an exception if the [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/YearEndJournalVoucher/Reverse/{voucherId}](Route_POST_Voucher_YearEndJournalVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.


