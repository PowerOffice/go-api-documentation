
IncomingInvoiceVoucher
================

Incoming Invoice Voucher representing a posted voucher that is of type incoming invoice or incoming credit note from a [Supplier](GoApi.Party.Supplier.md) . (Norwegian: Leverandørfaktura/leverandørkreditnota - Inngående faktura/kreditnota)         All lines will be posted debit and the debit sum of the lines will be posted credit on the supplier's sub ledger account.         Lines that shall be posted credit should be specified with negative amount.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Voucher.Voucher.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
[Cid](GoApi.Voucher.IncomingInvoiceVoucher.Cid.md)|Gets or sets the Customer Identification Code (Norwegian: KID).
[ContractNo](GoApi.Voucher.IncomingInvoiceVoucher.ContractNo.md)|Field representing the contract number on the incoming invoice.
[CreatedDate](GoApi.Voucher.Voucher.CreatedDate.md)|Gets the created date. This value is assigned by PowerOffice Go when the voucher is posted.
[CurrencyCode](GoApi.Voucher.Voucher.CurrencyCode.md)|Gets or sets the currency code.
[CurrencyRate](GoApi.Voucher.IncomingInvoiceVoucher.CurrencyRate.md)|Gets or sets the normalized currency rate of the IncomingInvoice (factor to multiply amount in voucher currency with to get amount in local currency).
[CustomMatchingReference](GoApi.Voucher.IncomingInvoiceVoucher.CustomMatchingReference.md)|Gets or sets the custom matching reference. Vouchers with this value can be matched with other entries with same CustomMatchingReference.
[DepartmentCode](GoApi.Voucher.Voucher.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) .
[Dim1Code](GoApi.Voucher.Voucher.Dim1Code.md)|Gets or sets the code of the custom dimension 1.
[Dim2Code](GoApi.Voucher.Voucher.Dim2Code.md)|Gets or sets the code of the custom dimension 2.
[Dim3Code](GoApi.Voucher.Voucher.Dim3Code.md)|Gets or sets the code of the custom dimension 3.
[DueDate](GoApi.Voucher.IncomingInvoiceVoucher.DueDate.md)|Gets or sets the due date. If not provided, the due date of the incoming invoice voucher will be set to VoucherDate.
[ExternalImportReference](GoApi.Voucher.Voucher.ExternalImportReference.md)|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check vouchers. Must be a unique value for a given client. Max length is 50 characters.
[HasImportedDocumentation](GoApi.Voucher.Voucher.HasImportedDocumentation.md)|Set to true if the voucher has [VoucherDocumentation](GoApi.Voucher.VoucherDocumentation.md) imported through the API.
[ImportedVoucherNo](GoApi.Voucher.Voucher.ImportedVoucherNo.md)|Gets or sets the imported Voucher number. This value can be used to set a reference from the external system creating the voucher.
[InvoiceNo](GoApi.Voucher.IncomingInvoiceVoucher.InvoiceNo.md)|Gets or sets the invoice number.
[IsReversed](GoApi.Voucher.Voucher.IsReversed.md)|Gets information whether this voucher has been reversed. This can be done by the API through the Reverse method in the voucher service, or by a user through the reverse function.
[Lines](GoApi.Voucher.IncomingInvoiceVoucher.Lines.md)|Gets or sets the incoming invoice lines ( [IncomingInvoiceVoucherLine](GoApi.Voucher.IncomingInvoiceVoucherLine.md) ).         All lines will be posted debit and the debit sum of the lines will be posted credit on the supplier's sub ledger account.         Lines that shall be posted credit should be specified with negative amount.
[LocationCode](GoApi.Voucher.Voucher.LocationCode.md)|Gets or sets the code of the location
[ProjectCode](GoApi.Voucher.Voucher.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) .
[PurchaseOrderNo](GoApi.Voucher.IncomingInvoiceVoucher.PurchaseOrderNo.md)|Field representing the purchase order number on the incoming invoice.
[SaftBatchId](GoApi.Voucher.Voucher.SaftBatchId.md)|Gets or sets the SAF-T batch id. This is the ID of the batch in the system that transferred the voucher.     Should be set if this voucher is a batch voucher containing the entries of multiple vouchers in the external system.     When this voucher is exported to SAF-T, this property is transactions BatchID in the SAF-T file.     The external systems SAF-T export should set the same BatchId on all the transactions that are included in this Voucher to ensure audit trail.     Max length is 35 characters.
[SaftSourceId](GoApi.Voucher.Voucher.SaftSourceId.md)|Gets or sets the SAF-T source id. This is the ID of the system that generated the voucher.     When this voucher is exported to SAF-T, this property is mapped on the transactions SourceID in the SAF-T file.     If the creating system is required to export it's own SAF-T file, this source id should correspond with the SystemID in the SAF-T file of the external system to ensure an audit trail.     Max length is 35 characters.
[SupplierBankAccountCode](GoApi.Voucher.IncomingInvoiceVoucher.SupplierBankAccountCode.md)|Gets the bank account code of the [Supplier](GoApi.Party.Supplier.md) that should be paid to.
[SupplierCode](GoApi.Voucher.IncomingInvoiceVoucher.SupplierCode.md)|Gets or sets the code of the [Supplier](GoApi.Party.Supplier.md) this invoice is from.
[VoucherDate](GoApi.Voucher.Voucher.VoucherDate.md)|Gets or sets the voucher date.
[VoucherNo](GoApi.Voucher.Voucher.VoucherNo.md)|Gets the Voucher number. This value is assigned by PowerOffice Go when the voucher is posted.

### Constructors
Name | Description
:----|:------------
[IncomingInvoiceVoucher()](GoApi.Voucher.IncomingInvoiceVoucher.IncomingInvoiceVoucher__.md)|



