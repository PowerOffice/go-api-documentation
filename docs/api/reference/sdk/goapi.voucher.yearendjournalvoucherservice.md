
YearEndJournalVoucherService
================

Year End Journal Voucher service used to query and create and post [YearEndJournalVoucher](GoApi.Voucher.YearEndJournalVoucher.md) . (Norwegian: Årsavslutningsbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.YearEndJournal .



### Constructors
Name | Description
:----|:------------
[YearEndJournalVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.YearEndJournalVoucherService.YearEndJournalVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [YearEndJournalVoucherService](GoApi.Voucher.YearEndJournalVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.YearEndJournalVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.YearEndJournalVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.YearEndJournalVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.YearEndJournalVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(YearEndJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.YearEndJournalVoucher_.Save_YearEndJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(YearEndJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.YearEndJournalVoucher_.SaveAsync_YearEndJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.


