
BlobService
================

Service for downloading binary objects from blob storage as stream.



### Constructors
Name | Description
:----|:------------
[BlobService(IAuthorization authorization)](GoApi.Common.BlobService.BlobService_IAuthorization_authorization_.md)|Initializes a new instance of the [BlobService](GoApi.Common.BlobService.md) class.
[BlobService(IAuthorization authorization, Host host)](GoApi.Common.BlobService.BlobService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [BlobService](GoApi.Common.BlobService.md) class.

### Methods
Name | Description
:----|:------------
[GetVoucherDocumentation(long voucherNo)](GoApi.Common.BlobService.GetVoucherDocumentation_Int64_voucherNo_.md)|Gets the voucher documentation.     It is recommended to use the GoApi.Common.BlobService.GetVoucherDocumentationList(System.Int64) to get all documents, as this function will only return a single documentation.
[GetVoucherDocumentationList(long voucherNo)](GoApi.Common.BlobService.GetVoucherDocumentationList_Int64_voucherNo_.md)|Gets list of all documents on the voucher.
[GetVoucherEhf(long voucherNo)](GoApi.Common.BlobService.GetVoucherEhf_Int64_voucherNo_.md)|Get the ehf xml document for a supplier invoice as a Stream.
[GetVoucherImage(long voucherNo, int pageNo)](GoApi.Common.BlobService.GetVoucherImage_Int64_voucherNo__Int32_pageNo_.md)|Get the image of a single page on a voucher as jpeg stream.


