
ExpenseVoucher
================

Expense Voucher service used to query and create and post [ExpenseVoucher](Type_ExpenseVoucher.md) . (Norwegian: Utlegg)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.Expense .

**Base Url**: `https://api.poweroffice.net/Voucher/ExpenseVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/ExpenseVoucher/](Route_GET_Voucher_ExpenseVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [ExpenseVoucher](Type_ExpenseVoucher.md) filtered by odata query. This query will only return the expense created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.Expense .
[Voucher/ExpenseVoucher/](Route_POST_Voucher_ExpenseVoucher_.md)|POST|Saves a [ExpenseVoucher](Type_ExpenseVoucher.md) and posts it to the general ledger.
[Voucher/ExpenseVoucher/{id}](Route_GET_Voucher_ExpenseVoucher__id__.md)|GET|Gets the specified [ExpenseVoucher](Type_ExpenseVoucher.md) by its identifier.         Will throw an exception if the [ExpenseVoucher](Type_ExpenseVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/ExpenseVoucher/Reverse/{voucherId}](Route_POST_Voucher_ExpenseVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.


