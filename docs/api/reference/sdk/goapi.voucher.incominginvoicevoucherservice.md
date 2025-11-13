
IncomingInvoiceVoucherService
================

Incoming Invoice Voucher service used to query and create and post [IncomingInvoiceVoucher](GoApi.Voucher.IncomingInvoiceVoucher.md) . (Norwegian: Leverandørfaktura/leverandørkreditnota - Inngående faktura/kreditnota)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.IncomingInvoice or GoApi.Common.VoucherType.IncomingCreditNote .



### Constructors
Name | Description
:----|:------------
[IncomingInvoiceVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.IncomingInvoiceVoucherService.IncomingInvoiceVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [IncomingInvoiceVoucherService](GoApi.Voucher.IncomingInvoiceVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.IncomingInvoiceVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.IncomingInvoiceVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.IncomingInvoiceVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.IncomingInvoiceVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(IncomingInvoiceVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.IncomingInvoiceVoucher_.Save_IncomingInvoiceVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(IncomingInvoiceVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.IncomingInvoiceVoucher_.SaveAsync_IncomingInvoiceVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.
[UpdateRemittanceInfo(RemittanceInfoRequest entity)](GoApi.Voucher.IncomingInvoiceVoucherService.UpdateRemittanceInfo_RemittanceInfoRequest_entity_.md)|Updates whether the invoice should use remittance or not, and related payment properties.         Remittance of an invoice is a direct payment from the client to the supplier that issued the invoice.         If remittance is true, the invoice becomes payable from the payment view in PowerOffice Go, enabling users to pay the invoice directly from Go through their bank integration.


