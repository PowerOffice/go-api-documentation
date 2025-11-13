
BankJournalVoucherService
================

Bank Journal Voucher service used to query and create and post [BankJournalVoucher](GoApi.Voucher.BankJournalVoucher.md) . (Norwegian: Bankbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.BankJournal .



### Constructors
Name | Description
:----|:------------
[BankJournalVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.BankJournalVoucherService.BankJournalVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [BankJournalVoucherService](GoApi.Voucher.BankJournalVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.BankJournalVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.BankJournalVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.BankJournalVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.BankJournalVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(BankJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.BankJournalVoucher_.Save_BankJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(BankJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.BankJournalVoucher_.SaveAsync_BankJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.


