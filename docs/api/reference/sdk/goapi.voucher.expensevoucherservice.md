
ExpenseVoucherService
================

Expense Voucher service used to query and create and post [ExpenseVoucher](GoApi.Voucher.ExpenseVoucher.md) . (Norwegian: Utlegg)     Querying this service will only return the vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.Expense .



### Constructors
Name | Description
:----|:------------
[ExpenseVoucherService(IAuthorization authorization, Host host)](GoApi.Voucher.ExpenseVoucherService.ExpenseVoucherService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [ExpenseVoucherService](GoApi.Voucher.ExpenseVoucherService.md) class.

### Methods
Name | Description
:----|:------------
[Get()](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ExpenseVoucher_.Get__.md)|Gets all vouchers as a Linq expression.
[GetAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ExpenseVoucher_.GetAsync_Guid_id_.md)|Get a voucher by its Id asynchronously.
[Reverse(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ExpenseVoucher_.Reverse_Guid_id_.md)|Reverses a voucher previously posted by the vouchers identifier.
[ReverseAsync(Guid id)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ExpenseVoucher_.ReverseAsync_Guid_id_.md)|Reverses a voucher previously posted asynchronously by the vouchers identifier.
[Save(ExpenseVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ExpenseVoucher_.Save_ExpenseVoucher_entity_.md)|Saves the voucher and posts it to the general ledger.
[SaveAsync(ExpenseVoucher entity)](GoApi.Voucher.BaseVoucherService_GoApi.Voucher.ExpenseVoucher_.SaveAsync_ExpenseVoucher_entity_.md)|Saves the voucher and posts it to the general ledger asynchronously.


