
Blob
================

Service for downloading binary objects from blob storage as stream.

**Base Url**: `https://api.poweroffice.net/Blob/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Blob/GetVoucherDocumentation/{voucherNo}](Route_GET_Blob_GetVoucherDocumentation__voucherNo__.md)|GET|Gets the voucher document.
[Blob/GetVoucherDocumentationList/{voucherNo}](Route_GET_Blob_GetVoucherDocumentationList__voucherNo__.md)|GET|Get list with all documents on voucher.     (returns empty list if no documents are found on voucher)
[Blob/VoucherEhf/{voucherNo}](Route_GET_Blob_VoucherEhf__voucherNo__.md)|GET|Get the ehf xml document for a supplier invoice as a Stream.
[Blob/VoucherImage/{voucherNo}/{pageNo}](Route_GET_Blob_VoucherImage__voucherNo___pageNo__.md)|GET|Get the image of a single page on a voucher as jpeg stream.


