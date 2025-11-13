
VoucherDocumentationService
================

Service used to save and get documentation pdf ( [VoucherDocumentation](GoApi.Voucher.VoucherDocumentation.md) ) connected to previously imported voucher.     The voucher must have been imported by the API to be able to insert documentation with this service.     It is only possible to import pdf file. The max file size is 50Mb.     It is possible to import several times. The last import will replace the previous import.     Replacements can only be done by the same integration that imported the previous file.



### Constructors
Name | Description
:----|:------------
[VoucherDocumentationService(IAuthorization authorization, Host host)](GoApi.Voucher.VoucherDocumentationService.VoucherDocumentationService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [VoucherDocumentationService](GoApi.Voucher.VoucherDocumentationService.md) class.

### Methods
Name | Description
:----|:------------
[Get(Guid voucherId)](GoApi.Voucher.VoucherDocumentationService.Get_Guid_voucherId_.md)|Gets the [VoucherDocumentation](GoApi.Voucher.VoucherDocumentation.md) on a voucher by the voucher id.
[GetAsync(Guid voucherId)](GoApi.Voucher.VoucherDocumentationService.GetAsync_Guid_voucherId_.md)|Gets the [VoucherDocumentation](GoApi.Voucher.VoucherDocumentation.md) on a voucher asynchronously by the voucher id.
[Save(VoucherDocumentation entity)](GoApi.Voucher.VoucherDocumentationService.Save_VoucherDocumentation_entity_.md)|Saves the specified [VoucherDocumentation](GoApi.Voucher.VoucherDocumentation.md) .
[SaveAsync(VoucherDocumentation entity)](GoApi.Voucher.VoucherDocumentationService.SaveAsync_VoucherDocumentation_entity_.md)|Saves the specified [VoucherDocumentation](GoApi.Voucher.VoucherDocumentation.md) asynchronously.


