
CashJournalVoucher (CashJournalVoucher)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
CreatedDate|Date|Gets the created date. This value is assigned by PowerOffice Go when the voucher is posted.
CurrencyCode|string|Gets or sets the currency code.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) .
Description|string|Gets or sets the description.
Dim1Code|string|Gets or sets the code of the custom dimension 1.
Dim2Code|string|Gets or sets the code of the custom dimension 2.
Dim3Code|string|Gets or sets the code of the custom dimension 3.
ExternalImportReference|string|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check vouchers. Must be a unique value for a given client. Max length is 50 characters.
HasImportedDocumentation|boolean|Set to true if the voucher has [VoucherDocumentation](Type_VoucherDocumentation.md) imported through the API.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
ImportedVoucherNo|number|Gets or sets the imported Voucher number. This value can be used to set a reference from the external system creating the voucher.
IsReversed|boolean|Gets information whether this voucher has been reversed. This can be done by the API through the Reverse method in the voucher service, or by a user through the reverse function.
Lines|[CashJournalVoucherLine](Type_CashJournalVoucherLine.md)|Gets or sets the cash journal lines ( [CashJournalVoucherLine](Type_CashJournalVoucherLine.md) ).
LocationCode|string|Gets or sets the code of the location
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) .
SaftBatchId|string|Gets or sets the SAF-T batch id. This is the ID of the batch in the system that transferred the voucher.     Should be set if this voucher is a batch voucher containing the entries of multiple vouchers in the external system.     When this voucher is exported to SAF-T, this property is transactions BatchID in the SAF-T file.     The external systems SAF-T export should set the same BatchId on all the transactions that are included in this Voucher to ensure audit trail.     Max length is 35 characters.
SaftSourceId|string|Gets or sets the SAF-T source id. This is the ID of the system that generated the voucher.     When this voucher is exported to SAF-T, this property is mapped on the transactions SourceID in the SAF-T file.     If the creating system is required to export it's own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of the external system to ensure an audit trail.     Max length is 35 characters.
VoucherDate|Date|Gets or sets the voucher date.
VoucherNo|number|Gets the Voucher number. This value is assigned by PowerOffice Go when the voucher is posted.
