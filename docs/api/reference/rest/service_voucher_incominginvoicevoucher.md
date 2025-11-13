
IncomingInvoiceVoucher
================

Incoming Invoice Voucher service used to query and create and post [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) . (Norwegian: Leverandørfaktura/leverandørkreditnota - Inngående faktura/kreditnota)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.IncomingInvoice or GoApi.Common.VoucherType.IncomingCreditNote .

**Base Url**: `https://api.poweroffice.net/Voucher/IncomingInvoiceVoucher/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/IncomingInvoiceVoucher/](Route_GET_Voucher_IncomingInvoiceVoucher__options__options_.md)?options=&lt;options&gt;|GET|Gets a list of [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.IncomingInvoice or GoApi.Common.VoucherType.IncomingCreditNote .
[Voucher/IncomingInvoiceVoucher/](Route_POST_Voucher_IncomingInvoiceVoucher_.md)|POST|Saves a [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) and posts it to the general ledger.
[Voucher/IncomingInvoiceVoucher/{id}](Route_GET_Voucher_IncomingInvoiceVoucher__id__.md)|GET|Gets the specified [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) by its identifier.         Will throw an exception if the [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) does not exist, or it has not been created by the integration querying this method.
[Voucher/IncomingInvoiceVoucher/Reverse/{voucherId}](Route_POST_Voucher_IncomingInvoiceVoucher_Reverse__voucherId__.md)|POST|Reverses a previously sent voucher by its id.
[Voucher/IncomingInvoiceVoucher/UpdateRemittanceInfo](Route_POST_Voucher_IncomingInvoiceVoucher_UpdateRemittanceInfo_.md)|POST|Updates whether the invoice should use remittance or not, and related payment properties.         Remittance of an invoice is a direct payment from the client to the supplier that issued the invoice.         If remittance is true, the invoice becomes payable from the payment view in PowerOffice Go, enabling users to pay the invoice directly from Go through their bank integration.


