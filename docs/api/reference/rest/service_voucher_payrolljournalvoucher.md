
PayrollJournalVoucher
================

Payroll Journal Voucher service used to query and create and post [PayrollJournalVoucher](Type_PayrollJournalVoucher.md) . (Norwegian: Lønnsbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.PayrollJournal .

**Base Url**: `https://api.poweroffice.net/Voucher/PayrollJournalVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/PayrollJournalVoucher/](Route_GET_Voucher_PayrollJournalVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [PayrollJournalVoucher](Type_PayrollJournalVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.PayrollJournal .
[Voucher/PayrollJournalVoucher/](Route_POST_Voucher_PayrollJournalVoucher_.md)|POST|Saves a [PayrollJournalVoucher](Type_PayrollJournalVoucher.md) and posts it to the general ledger.
[Voucher/PayrollJournalVoucher/{id}](Route_GET_Voucher_PayrollJournalVoucher__id__.md)|GET|Gets the specified [PayrollJournalVoucher](Type_PayrollJournalVoucher.md) by its identifier. Will throw an exception if the [PayrollJournalVoucher](Type_PayrollJournalVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/PayrollJournalVoucher/Reverse/{voucherId}](Route_POST_Voucher_PayrollJournalVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.


