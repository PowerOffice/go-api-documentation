
OutgoingInvoiceVoucher
================

Outgoing Invoice Voucher service used to query and create and post [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) . (Norwegian: Kundefaktura/kundereditnota - Utgående faktura/kreditnota)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.OutgoingInvoice or GoApi.Common.VoucherType.OutgoingCreditNote .

**Base Url**: `https://api.poweroffice.net/Voucher/OutgoingInvoiceVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/OutgoingInvoiceVoucher/](Route_GET_Voucher_OutgoingInvoiceVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.OutgoingInvoice or GoApi.Common.VoucherType.OutgoingCreditNote .
[Voucher/OutgoingInvoiceVoucher/](Route_POST_Voucher_OutgoingInvoiceVoucher_.md)|POST|Saves a [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) and posts it to the general ledger.
[Voucher/OutgoingInvoiceVoucher/{id}](Route_GET_Voucher_OutgoingInvoiceVoucher__id__.md)|GET|Gets the specified [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) by its identifier.         Will throw an exception if the [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/OutgoingInvoiceVoucher/Reverse/{voucherId}](Route_POST_Voucher_OutgoingInvoiceVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.


