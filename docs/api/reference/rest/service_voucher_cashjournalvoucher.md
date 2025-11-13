
CashJournalVoucher
================

Cash Journal Voucher service used to query and create and post [CashJournalVoucher](Type_CashJournalVoucher.md) . (Norwegian: Kontantbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.CashJournal .

**Base Url**: `https://api.poweroffice.net/Voucher/CashJournalVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/CashJournalVoucher/](Route_GET_Voucher_CashJournalVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [CashJournalVoucher](Type_CashJournalVoucher.md) filtered by odata query. This query will only return the cash journal vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.CashJournal .
[Voucher/CashJournalVoucher/](Route_POST_Voucher_CashJournalVoucher_.md)|POST|Saves a [CashJournalVoucher](Type_CashJournalVoucher.md) and posts it to the general ledger.
[Voucher/CashJournalVoucher/{id}](Route_GET_Voucher_CashJournalVoucher__id__.md)|GET|Gets the specified [CashJournalVoucher](Type_CashJournalVoucher.md) by its identifier.         Will throw an exception if the [CashJournalVoucher](Type_CashJournalVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/CashJournalVoucher/Reverse/{voucherId}](Route_POST_Voucher_CashJournalVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.


