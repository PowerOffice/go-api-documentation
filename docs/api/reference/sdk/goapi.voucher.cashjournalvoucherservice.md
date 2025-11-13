
CashJournalVoucherService
================

Cash Journal Voucher service used to query and create and post [CashJournalVoucher](GoApi.Voucher.CashJournalVoucher.md) . (Norwegian: Kontantbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.CashJournal .



### Constructors
Name | Description
:----|:------------
[CashJournalVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.CashJournalVoucherService.CashJournalVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [CashJournalVoucherService](GoApi.Voucher.CashJournalVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.CashJournalVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.CashJournalVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.CashJournalVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.CashJournalVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(CashJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.CashJournalVoucher_.Save_CashJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(CashJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.CashJournalVoucher_.SaveAsync_CashJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.


