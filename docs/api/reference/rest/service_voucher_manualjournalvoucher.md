
ManualJournalVoucher
================

Manual Journal Voucher service used to query and create and post [ManualJournalVoucher](Type_ManualJournalVoucher.md) . (Norwegian: Manuelt bilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.ManualJournal .

**Base Url**: `https://api.poweroffice.net/Voucher/ManualJournalVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/ManualJournalVoucher/](Route_GET_Voucher_ManualJournalVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [ManualJournalVoucher](Type_ManualJournalVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.ManualJournal .
[Voucher/ManualJournalVoucher/](Route_POST_Voucher_ManualJournalVoucher_.md)|POST|Saves a [ManualJournalVoucher](Type_ManualJournalVoucher.md) and posts it to the general ledger.
[Voucher/ManualJournalVoucher/{id}](Route_GET_Voucher_ManualJournalVoucher__id__.md)|GET|Gets the specified [ManualJournalVoucher](Type_ManualJournalVoucher.md) by its identifier.         Will throw an exception if the [ManualJournalVoucher](Type_ManualJournalVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/ManualJournalVoucher/Reverse/{voucherId}](Route_POST_Voucher_ManualJournalVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.


