
InvoiceJournalLine (InvoiceJournalLine)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Balance|number|Gets the remaining amount to be paid on this invoice. This balance is in the clients local currency, and not the currency of the invoice.
CID|string|Gets or sets the cid. (Norwegian: KID)
CreatedFromImportJournalId|string (Guid)|Gets the identifier of the [Import](Type_Import.md) that created this invoice.
CreditNoteInvoiceReference|number|Gets or sets the credit note invoice reference.
Currency|string|Gets or sets the currency.
CurrencyRate|number|Gets or sets the currency rate.
Customer|[Customer](Type_Customer.md)|OBSOLETE - Gets or sets the customer.         Note: Returned object only contains Id, Code and Name of Customer, all other properties are empty (CustomerCreatedDate, CreatedDate and LastChanged are default value since they are not nullable).         Use Customer.Id (or CustomerCode) and query the Customer endpoint to get full Customer object.
DebtCollectionCaseStatus|[DebtCollectionCaseStatus](Type_DebtCollectionCaseStatus.md)|Gets the status of the external [DebtCollectionCase](Type_DebtCollectionCase.md) associated with this invoice.
DebtCollectionCode|string|Gets the code of the external [DebtCollectionCase](Type_DebtCollectionCase.md) .
DueDate|Date|Gets or sets the due date.
ExpectedDueDate|Date|Gets the expected due date. This is a manually overrideable date that can be set on invoices where a user has given an extended amount of credit days before the invoice is due, after the invoice has been sent.
ExternalCaseNumber|string|Gets or sets the external case number. Used debt collection companies to set their external reference when following up invoices.
ExternalImportReference|string|Gets the ExternalImportReference. Can be used to correlate/duplicate check invoices.
HasVoucherDocumentation|boolean|Gets a value indicating if the voucher has original documentation.
Id|string (Guid)|Gets or sets identifier of the voucher.
ImportedOrderNo|number|Gets or sets the imported order no. This field will contain a value if this invoice is created from an order imported over API or Import.
InvoiceDebtCollectionStatus|[DebtCollectionStatus](Type_DebtCollectionStatus.md)|Gets the internal debt collection status associated with this invoice.
InvoiceJournalSalesLines|[InvoiceJournalSalesLine](Type_InvoiceJournalSalesLine.md)|Gets the lines on the invoice/credit note ( [InvoiceJournalSalesLine](Type_InvoiceJournalSalesLine.md) ).
InvoiceNo|number|Gets or sets the invoice number.
InvoiceStatus|[InvoiceStatus](Type_InvoiceStatus.md)|Gets the status of the invoice.
IsOnHold|boolean|Gets a value indicating whether this instance is on hold.
LanguageCode|string|Gets or sets the code of the language used in the invoice document.
LastChanged|Date|Gets the last changed date.
NetAmount|number|Gets or sets the net amount (exclusive VAT).
Reference|string|Gets or sets the reference.
ReminderDueDate|Date|Gets the reminder due date. If GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceStatus on this line is PaymentReminderSent, NoticeOfDebtCollectionSent, PaymentDemandSent or WarrantOfExecutionSent;     this property will contain the date which that reminder is due.
ReminderSentDate|Date|Gets the reminder sent date. If GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceStatus on this line is PaymentReminderSent, NoticeOfDebtCollectionSent, PaymentDemandSent or WarrantOfExecutionSent;     this property will contain the date which that type of reminder was sent.
Text|string|Gets or sets the text.
TotalAmount|number|Gets or sets the total amount inclusive value added tax (VAT).
VatAmount|number|Gets or sets the value added tax (VAT) amount.
VoucherDate|Date|Gets or sets the voucher date.
VoucherNo|number|Gets or sets the voucher number.
VoucherType|[VoucherType](Type_VoucherType.md)|Gets or sets the type of the voucher.
