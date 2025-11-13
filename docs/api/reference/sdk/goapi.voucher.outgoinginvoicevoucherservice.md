
OutgoingInvoiceVoucherService
================

Service used to query and create and post [OutgoingInvoiceVoucher](GoApi.Voucher.OutgoingInvoiceVoucher.md) . (Norwegian: Kundefaktura/kundekreditnota - Utgående faktura/kreditnota)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.OutgoingInvoice or GoApi.Common.VoucherType.OutgoingCreditNote .



### Constructors
Name | Description
:----|:------------
[OutgoingInvoiceVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.OutgoingInvoiceVoucherService.OutgoingInvoiceVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [OutgoingInvoiceVoucherService](GoApi.Voucher.OutgoingInvoiceVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.OutgoingInvoiceVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.OutgoingInvoiceVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.OutgoingInvoiceVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.OutgoingInvoiceVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(OutgoingInvoiceVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.OutgoingInvoiceVoucher_.Save_OutgoingInvoiceVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(OutgoingInvoiceVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.OutgoingInvoiceVoucher_.SaveAsync_OutgoingInvoiceVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.


