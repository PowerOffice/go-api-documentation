
JournalEntryVoucher
================

Journal entry voucher representing a Voucher sent to Journal Entry for posting.


### Properties
Name | Description
:----|:------------
[Id](GoApi.JournalEntry.JournalEntryVoucher.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[BankAccountCode](GoApi.JournalEntry.JournalEntryVoucher.BankAccountCode.md)|Gets the bank account code that this voucher should be paid out to. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .
[CID](GoApi.JournalEntry.JournalEntryVoucher.CID.md)|Field representing the customer identification code (Norwegian: KID-nummer) on the voucher. Can be used on vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice and GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
[Comment](GoApi.JournalEntry.JournalEntryVoucher.Comment.md)|Optional comment that will be shown in the journal entry history in Go. Only new vouchers will get the comment as part of the initial history. It is thus not possible to change the comment later, and it will not be returned in API-calls. Max length is 250 characters.
[ContractNo](GoApi.JournalEntry.JournalEntryVoucher.ContractNo.md)|Field representing the contract number on the voucher. Can be used on vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice and GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
[CreditNoteNo](GoApi.JournalEntry.JournalEntryVoucher.CreditNoteNo.md)|The credit note number of the credit note. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote to represent what invoice has been credited.
[CurrencyCode](GoApi.JournalEntry.JournalEntryVoucher.CurrencyCode.md)|The ISO 4217 currency code specifying the currency on the Voucher. Required for all voucher types.
[CurrencyRate](GoApi.JournalEntry.JournalEntryVoucher.CurrencyRate.md)|Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).     Only relevant for vouchertypes GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .     For other vouchertypes, the currency rate can be set on the lines.
[DepartmentCode](GoApi.JournalEntry.JournalEntryVoucher.DepartmentCode.md)|The code of the [Department](GoApi.Dimension.Department.md) on the voucher .
[Description](GoApi.JournalEntry.JournalEntryVoucher.Description.md)|Description of the Voucher. Can be used to describe the voucher and is set on the head. Can be used on all voucher types EXCEPT GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
[DueDate](GoApi.JournalEntry.JournalEntryVoucher.DueDate.md)|The due date on the head of the voucher. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .
[EmployeeCode](GoApi.JournalEntry.JournalEntryVoucher.EmployeeCode.md)|The code of the [Employee](GoApi.Party.Employee.md) the Expense is from and should be paid out to. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.Expense .
[ExternalImportReference](GoApi.JournalEntry.JournalEntryVoucher.ExternalImportReference.md)|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check invoices. Must be a unique value for a given client. Max length is 50 characters.
[File](GoApi.JournalEntry.JournalEntryVoucher.File.md)|The file containing the documentation of the voucher. This is displayed to the user assigned to post / approve this Voucher. Required for all voucher types.      File is always NULL in GET results from PowerOffice Go.
[InvoiceNo](GoApi.JournalEntry.JournalEntryVoucher.InvoiceNo.md)|The invoice number related to the invoice or credit note. Can be used on with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice or for GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote this field represents what invoice has been credited.
[IsSubmittedForApproval](GoApi.JournalEntry.JournalEntryVoucher.IsSubmittedForApproval.md)|Gets whether the voucher was submitted for approval. Will only contain a value in the response when saving a new JournalEntryVoucher with the flag GoApi.JournalEntry.JournalEntryVoucher.SubmitForApproval set to true and contains information whether the voucher was submitted or not. If the voucher failed to submit, the GoApi.JournalEntry.JournalEntryVoucher.SubmitForApprovalErrorMessage will contain the reason why the submission failed.
[LastChanged](GoApi.JournalEntry.JournalEntryVoucher.LastChanged.md)|Gets the last changed date.
[PaymentDate](GoApi.JournalEntry.JournalEntryVoucher.PaymentDate.md)|Get or set the suggested date of payment. Relevant if Payout is true. Used to define the date of payment for the remittance.     Defaults to the dueDate if not set, and relevant only for vouchers of the type SupplierInvoice, SupplierCreditNote and Expense.
[Payout](GoApi.JournalEntry.JournalEntryVoucher.Payout.md)|Get or set a flag indicating whether this voucher should be paid using remittance.      Defaults to true, and if true a remittance draft will be created when the voucher is posted in Go.      If voucher is of type SupplierInvoice or SupplierCreditNote and SupplierCode is set, then the "Pay out invoices" value on the supplier will be used.      Only relevant on voucher of the type SupplierInvoice, SupplierCreditNote and Expense.
[ProjectCode](GoApi.JournalEntry.JournalEntryVoucher.ProjectCode.md)|The code of the [Project](GoApi.Projects.Project.md) on the voucher .
[PurchaseOrderNo](GoApi.JournalEntry.JournalEntryVoucher.PurchaseOrderNo.md)|Field representing the purchase order number on the voucher. Can be used on vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice and GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
[SubmitForApproval](GoApi.JournalEntry.JournalEntryVoucher.SubmitForApproval.md)|Gets or sets whether Go should try to auto-submit the voucher to approval instead of uploading it to journal entry. This feature will only work on suppliers that have been configured for auto approval in PowerOffice.
[SubmitForApprovalErrorMessage](GoApi.JournalEntry.JournalEntryVoucher.SubmitForApprovalErrorMessage.md)|Gets an error message/reason for failing to submit the voucher for approval. Will only contain a value in the response when saving a new JournalEntryVoucher with the flag GoApi.JournalEntry.JournalEntryVoucher.SubmitForApproval and the submission failed.
[SupplierCode](GoApi.JournalEntry.JournalEntryVoucher.SupplierCode.md)|The code of the [Supplier](GoApi.Party.Supplier.md) the invoice or credit note is from.      Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice or GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
[TotalAmount](GoApi.JournalEntry.JournalEntryVoucher.TotalAmount.md)|The total amount of this voucher. Can be used on with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .     This is the total amount set on the head of the Voucher and the amount that is posted on the sub ledger account.
[VoucherDate](GoApi.JournalEntry.JournalEntryVoucher.VoucherDate.md)|The voucher date on the head of the voucher. Can be used on all voucher types.
[VoucherLines](GoApi.JournalEntry.JournalEntryVoucher.VoucherLines.md)|Gets or sets voucher lines.
[VoucherType](GoApi.JournalEntry.JournalEntryVoucher.VoucherType.md)|Required property representing the type of voucher.

### Constructors
Name | Description
:----|:------------
[JournalEntryVoucher()](GoApi.JournalEntry.JournalEntryVoucher.JournalEntryVoucher__.md)|



