
InvoiceJournalService
================

Service for querying [InvoiceJournalLine](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md) on a client.         A InvoiceJournalLine is representing an Invoice or CreditNote that has been sent to a customer.



### Constructors
Name | Description
:----|:------------
[InvoiceJournalService(IAuthorization authorization)](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.InvoiceJournalService_IAuthorization_authorization_.md)|Initializes a new instance of the [InvoiceJournalService](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.md) class.
[InvoiceJournalService(IAuthorization authorization, Host host)](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.InvoiceJournalService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [InvoiceJournalService](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.md) class.

### Methods
Name | Description
:----|:------------
[Get(DateTime fromDate, DateTime toDate)](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.Get_DateTime_fromDate__DateTime_toDate_.md)|Gets all outgoing invoices and credit notes ( [InvoiceJournalLine](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md) ) sent between two dates.
[Get(long fromInvoiceNo, long toInvoiceNo)](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.Get_Int64_fromInvoiceNo__Int64_toInvoiceNo_.md)|Gets all outgoing invoices and credit notes ( [InvoiceJournalLine](GoApi.Reporting.InvoiceJournal.InvoiceJournalLine.md) ) with invoice number between two numbers.
[GetPdf(Guid id)](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.GetPdf_Guid_id_.md)|Gets the PDF for a given invoice or credit note.
[SetExternalCaseNumber(Guid id, string externalCaseNumber)](GoApi.Reporting.InvoiceJournal.InvoiceJournalService.SetExternalCaseNumber_Guid_id__String_externalCaseNumber_.md)|OBSOLETE - Sets the external case number.      This method is now obsolete, since we now have a specific service for debt collection ( [DebtCollectionService](GoApi.DebtCollection.DebtCollectionService.md) ).


