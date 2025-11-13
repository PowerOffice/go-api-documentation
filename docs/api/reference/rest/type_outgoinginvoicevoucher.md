
OutgoingInvoiceVoucher (OutgoingInvoiceVoucher)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Cid|string|Gets or sets the Customer Identification Code (Norwegian: KID).
ContractNo|string|Gets or sets the contract no.
CreatedDate|Date|Gets the created date. This value is assigned by PowerOffice Go when the voucher is posted.
CurrencyCode|string|Gets or sets the currency code.
CurrencyRate|number|Gets or sets the normalized currency rate of the OutgoingInvoiceVoucher (factor to multiply amount in voucher currency with to get amount in local currency).
CustomerCode|number|Gets or sets the code of the [Customer](Type_Customer.md) this invoice is to.
CustomerReference|string|Gets or sets the customer reference.
CustomMatchingReference|string|Gets or sets the custom matching reference. Vouchers with this value can be matched with other entries with same CustomMatchingReference.
DeliveryDate|Date|Gets or sets the delivery date.
DeliveryTerm|string|Gets or set delivery term of the invoice.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) .
Dim1Code|string|Gets or sets the code of the custom dimension 1.
Dim2Code|string|Gets or sets the code of the custom dimension 2.
Dim3Code|string|Gets or sets the code of the custom dimension 3.
DueDate|Date|Gets or sets the due date. If not provided, the due date of the outgoing invoice voucher will be set to VoucherDate.
ExternalImportReference|string|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check vouchers. Must be a unique value for a given client. Max length is 50 characters.
HasImportedDocumentation|boolean|Set to true if the voucher has [VoucherDocumentation](Type_VoucherDocumentation.md) imported through the API.
HasVoucherDocumentation|boolean|Gets a value indicating if the invoice has original documentation.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
ImportedOrderNo|number|Gets or sets the imported order no.
ImportedVoucherNo|number|Gets or sets the imported Voucher number. This value can be used to set a reference from the external system creating the voucher.
InvoiceNo|number|Gets or sets the invoice number.
IsReversed|boolean|Gets information whether this voucher has been reversed. This can be done by the API through the Reverse method in the voucher service, or by a user through the reverse function.
Lines|[OutgoingInvoiceVoucherLine](Type_OutgoingInvoiceVoucherLine.md)|Gets or sets the outgoing invoice lines ( [OutgoingInvoiceVoucherLine](Type_OutgoingInvoiceVoucherLine.md) ).         All lines will be posted credit and the credit sum of the lines will be posted debit on the [Customer](Type_Customer.md) sub ledger account.         Lines that shall be posted debit should be specified with negative amount.
LocationCode|string|Gets or sets the code of the location
OurReferenceEmployeeCode|number|Gets or sets the code of the [Employee](Type_Employee.md) that is the sales person on this invoice.
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) .
PurchaseOrderNo|string|Gets or sets the purchase order no.
SaftBatchId|string|Gets or sets the SAF-T batch id. This is the ID of the batch in the system that transferred the voucher.     Should be set if this voucher is a batch voucher containing the entries of multiple vouchers in the external system.     When this voucher is exported to SAF-T, this property is transactions BatchID in the SAF-T file.     The external systems SAF-T export should set the same BatchId on all the transactions that are included in this Voucher to ensure audit trail.     Max length is 35 characters.
SaftSourceId|string|Gets or sets the SAF-T source id. This is the ID of the system that generated the voucher.     When this voucher is exported to SAF-T, this property is mapped on the transactions SourceID in the SAF-T file.     If the creating system is required to export it's own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of the external system to ensure an audit trail.     Max length is 35 characters.
VoucherDate|Date|Gets or sets the voucher date.
VoucherNo|number|Gets the Voucher number. This value is assigned by PowerOffice Go when the voucher is posted.
