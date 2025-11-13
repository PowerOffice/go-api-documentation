
ManualJournalVoucherService
================

Manual Journal Voucher service used to query and create and post [ManualJournalVoucher](GoApi.Voucher.ManualJournalVoucher.md) . (Norwegian: Manuelt bilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.ManualJournal .



### Constructors
Name | Description
:----|:------------
[ManualJournalVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.ManualJournalVoucherService.ManualJournalVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [ManualJournalVoucherService](GoApi.Voucher.ManualJournalVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ManualJournalVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ManualJournalVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ManualJournalVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ManualJournalVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(ManualJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ManualJournalVoucher_.Save_ManualJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(ManualJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ManualJournalVoucher_.SaveAsync_ManualJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.


