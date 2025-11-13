
VoucherDocumentation (VoucherDocumentation)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Base64EncodedData|string|Gets or sets the file as Base64 encoded data. Required when adding VoucherDocumentation. Importing a new file requires the file type to be pdf. The file size must be less than 50Mb.
FileName|string|Gets or sets the file name. Required when adding VoucherDocumentation.
FileType|[DocumentationFileType](Type_DocumentationFileType.md)|Gets or sets the file type. Required when adding VoucherDocumentation and must be pdf when importing av new document.
VoucherId|string (Guid)|Gets or sets the voucher id. Required when adding VoucherDocumentation. The Voucher must previously have been imported by the API to enable import of documentation.
