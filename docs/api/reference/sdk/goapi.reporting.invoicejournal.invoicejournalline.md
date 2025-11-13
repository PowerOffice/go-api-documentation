
InvoiceJournalLine
================

InvoiceJournalLine representing an Invoice or CreditNote that has been sent to a customer.


### Properties
Name | Description
:----|:------------
[Balance](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.Balance.md)|Gets the remaining amount to be paid on this invoice. This balance is in the clients local currency, and not the currency of the invoice.
[CID](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.CID.md)|Gets or sets the cid. (Norwegian: KID)
[CreatedFromImportJournalId](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.CreatedFromImportJournalId.md)|Gets the identifier of the [Import](GoApi.Import.Import.md) that created this invoice.
[CreditNoteInvoiceReference](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.CreditNoteInvoiceReference.md)|Gets or sets the credit note invoice reference.
[Currency](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.Currency.md)|Gets or sets the currency.
[CurrencyRate](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.CurrencyRate.md)|Gets or sets the currency rate.
[Customer](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.Customer.md)|OBSOLETE - Gets or sets the customer.         Note: Returned object only contains Id, Code and Name of Customer, all other properties are empty (CustomerCreatedDate, CreatedDate and LastChanged are default value since they are not nullable).         Use Customer.Id (or CustomerCode) and query the Customer endpoint to get full Customer object.
[DebtCollectionCaseStatus](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.DebtCollectionCaseStatus.md)|Gets the status of the external [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) associated with this invoice.
[DebtCollectionCode](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.DebtCollectionCode.md)|Gets the code of the external [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) .
[DueDate](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.DueDate.md)|Gets or sets the due date.
[ExpectedDueDate](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.ExpectedDueDate.md)|Gets the expected due date. This is a manually overrideable date that can be set on invoices where a user has given an extended amount of credit days before the invoice is due, after the invoice has been sent.
[ExternalCaseNumber](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.ExternalCaseNumber.md)|Gets or sets the external case number. Used debt collection companies to set their external reference when following up invoices.
[ExternalImportReference](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.ExternalImportReference.md)|Gets the ExternalImportReference. Can be used to correlate/duplicate check invoices.
[HasVoucherDocumentation](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.HasVoucherDocumentation.md)|Gets a value indicating if the voucher has original documentation.
[Id](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.Id.md)|Gets or sets identifier of the voucher.
[ImportedOrderNo](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.ImportedOrderNo.md)|Gets or sets the imported order no. This field will contain a value if this invoice is created from an order imported over API or Import.
[InvoiceDebtCollectionStatus](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceDebtCollectionStatus.md)|Gets the internal debt collection status associated with this invoice.
[InvoiceJournalSalesLines](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceJournalSalesLines.md)|Gets the lines on the invoice/credit note ( [InvoiceJournalSalesLine](GoApi.Reporting.InvoiceJournal.InvoiceJournalSalesLine.md) ).
[InvoiceNo](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceNo.md)|Gets or sets the invoice number.
[InvoiceStatus](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceStatus.md)|Gets the status of the invoice.
[IsOnHold](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.IsOnHold.md)|Gets a value indicating whether this instance is on hold.
[LanguageCode](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.LanguageCode.md)|Gets or sets the code of the language used in the invoice document.
[LastChanged](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.LastChanged.md)|Gets the last changed date.
[NetAmount](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.NetAmount.md)|Gets or sets the net amount (exclusive VAT).
[Reference](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.Reference.md)|Gets or sets the reference.
[ReminderDueDate](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.ReminderDueDate.md)|Gets the reminder due date. If GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceStatus on this line is PaymentReminderSent, NoticeOfDebtCollectionSent, PaymentDemandSent or WarrantOfExecutionSent;     this property will contain the date which that reminder is due.
[ReminderSentDate](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.ReminderSentDate.md)|Gets the reminder sent date. If GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceStatus on this line is PaymentReminderSent, NoticeOfDebtCollectionSent, PaymentDemandSent or WarrantOfExecutionSent;     this property will contain the date which that type of reminder was sent.
[Text](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.Text.md)|Gets or sets the text.
[TotalAmount](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.TotalAmount.md)|Gets or sets the total amount inclusive value added tax (VAT).
[VatAmount](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.VatAmount.md)|Gets or sets the value added tax (VAT) amount.
[VoucherDate](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.VoucherDate.md)|Gets or sets the voucher date.
[VoucherNo](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.VoucherNo.md)|Gets or sets the voucher number.
[VoucherType](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.VoucherType.md)|Gets or sets the type of the voucher.

### Constructors
Name | Description
:----|:------------
[InvoiceJournalLine()](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.InvoiceJournalLine__.md)|Initializes a new instance of the [InvoiceJournalLine](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md) class.



