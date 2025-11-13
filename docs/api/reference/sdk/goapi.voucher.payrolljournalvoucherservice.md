
PayrollJournalVoucherService
================

Payroll Journal Voucher service used to query and create and post [PayrollJournalVoucher](GoApi.Voucher.PayrollJournalVoucher.md) . (Norwegian: Lønnsbilag)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.PayrollJournal .



### Constructors
Name | Description
:----|:------------
[PayrollJournalVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.PayrollJournalVoucherService.PayrollJournalVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [PayrollJournalVoucherService](GoApi.Voucher.PayrollJournalVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.PayrollJournalVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.PayrollJournalVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.PayrollJournalVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.PayrollJournalVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(PayrollJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.PayrollJournalVoucher_.Save_PayrollJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(PayrollJournalVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.PayrollJournalVoucher_.SaveAsync_PayrollJournalVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.


