
VoucherDocumentation
================

Service used to save and get documentation pdf ( [VoucherDocumentation](Type_VoucherDocumentation.md) ) connected to previously imported voucher.     The voucher must have been imported by the API to be able to insert documentation with this service.     It is only possible to import pdf file. The max file size is 50Mb.     It is possible to import several times. The last import will replace the previous import.     Replacements can only be done by the same integration that imported the previous file.

**Base Url**: `https://api.poweroffice.net/Voucher/VoucherDocumentation/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Voucher/VoucherDocumentation/](Route_POST_Voucher_VoucherDocumentation_.md)|POST|Adds [VoucherDocumentation](Type_VoucherDocumentation.md) to an imported Voucher.
[Voucher/VoucherDocumentation/{id}](Route_GET_Voucher_VoucherDocumentation__id__.md)|GET|Gets the imported [VoucherDocumentation](Type_VoucherDocumentation.md) by the Voucher's Id.


