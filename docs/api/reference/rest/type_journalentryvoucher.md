
JournalEntryVoucher (JournalEntryVoucher)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BankAccountCode|string|Gets the bank account code that this voucher should be paid out to. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .
CID|string|Field representing the customer identification code (Norwegian: KID-nummer) on the voucher. Can be used on vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice and GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
Comment|string|Optional comment that will be shown in the journal entry history in Go. Only new vouchers will get the comment as part of the initial history. It is thus not possible to change the comment later, and it will not be returned in API-calls. Max length is 250 characters.
ContractNo|string|Field representing the contract number on the voucher. Can be used on vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice and GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
CreditNoteNo|string|The credit note number of the credit note. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote to represent what invoice has been credited.
CurrencyCode|string|The ISO 4217 currency code specifying the currency on the Voucher. Required for all voucher types.
CurrencyRate|number|Gets or sets the normalized currency rate of the line (factor to multiply amount in voucher currency with to get amount in local currency).     Only relevant for vouchertypes GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .     For other vouchertypes, the currency rate can be set on the lines.
DepartmentCode|string|The code of the [Department](Type_Department.md) on the voucher .
Description|string|Description of the Voucher. Can be used to describe the voucher and is set on the head. Can be used on all voucher types EXCEPT GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
DueDate|Date|The due date on the head of the voucher. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .
EmployeeCode|number|The code of the [Employee](Type_Employee.md) the Expense is from and should be paid out to. Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.Expense .
ExternalImportReference|string|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check invoices. Must be a unique value for a given client. Max length is 50 characters.
File|[JournalEntryFile](Type_JournalEntryFile.md)|The file containing the documentation of the voucher. This is displayed to the user assigned to post / approve this Voucher. Required for all voucher types.      File is always NULL in GET results from PowerOffice Go.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InvoiceNo|string|The invoice number related to the invoice or credit note. Can be used on with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice or for GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote this field represents what invoice has been credited.
IsSubmittedForApproval|boolean|Gets whether the voucher was submitted for approval. Will only contain a value in the response when saving a new JournalEntryVoucher with the flag GoApi.JournalEntry.JournalEntryVoucher.SubmitForApproval set to true and contains information whether the voucher was submitted or not. If the voucher failed to submit, the GoApi.JournalEntry.JournalEntryVoucher.SubmitForApprovalErrorMessage will contain the reason why the submission failed.
LastChanged|Date|Gets the last changed date.
PaymentDate|Date|Get or set the suggested date of payment. Relevant if Payout is true. Used to define the date of payment for the remittance.     Defaults to the dueDate if not set, and relevant only for vouchers of the type SupplierInvoice, SupplierCreditNote and Expense.
Payout|boolean|Get or set a flag indicating whether this voucher should be paid using remittance.      Defaults to true, and if true a remittance draft will be created when the voucher is posted in Go.      If voucher is of type SupplierInvoice or SupplierCreditNote and SupplierCode is set, then the "Pay out invoices" value on the supplier will be used.      Only relevant on voucher of the type SupplierInvoice, SupplierCreditNote and Expense.
ProjectCode|string|The code of the [Project](Type_Project.md) on the voucher .
PurchaseOrderNo|string|Field representing the purchase order number on the voucher. Can be used on vouchers of type GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice and GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
SubmitForApproval|boolean|Gets or sets whether Go should try to auto-submit the voucher to approval instead of uploading it to journal entry. This feature will only work on suppliers that have been configured for auto approval in PowerOffice.
SubmitForApprovalErrorMessage|string|Gets an error message/reason for failing to submit the voucher for approval. Will only contain a value in the response when saving a new JournalEntryVoucher with the flag GoApi.JournalEntry.JournalEntryVoucher.SubmitForApproval and the submission failed.
SupplierCode|number|The code of the [Supplier](Type_Supplier.md) the invoice or credit note is from.      Can be used on vouchers with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice or GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote .
TotalAmount|number|The total amount of this voucher. Can be used on with VoucherType GoApi.JournalEntry.JournalEntryVoucherType.SupplierInvoice , GoApi.JournalEntry.JournalEntryVoucherType.SupplierCreditNote and GoApi.JournalEntry.JournalEntryVoucherType.Expense .     This is the total amount set on the head of the Voucher and the amount that is posted on the sub ledger account.
VoucherDate|Date|The voucher date on the head of the voucher. Can be used on all voucher types.
VoucherLines|[JournalEntryVoucherLine](Type_JournalEntryVoucherLine.md)|Gets or sets voucher lines.
VoucherType|[JournalEntryVoucherType](Type_JournalEntryVoucherType.md)|Required property representing the type of voucher.
