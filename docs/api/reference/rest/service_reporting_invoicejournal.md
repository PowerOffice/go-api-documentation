
InvoiceJournal
================

Service for querying [InvoiceJournalLine](Type_InvoiceJournalLine.md) on a client.         A InvoiceJournalLine is representing an Invoice or CreditNote that has been sent to a customer.

**Base Url**: `https://api.poweroffice.net/Reporting/InvoiceJournal/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Reporting/InvoiceJournal/](Route_GET_Reporting_InvoiceJournal__fromDate__fromDate__toDate__toDate__options__options_.md)?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets [InvoiceJournalLine](Type_InvoiceJournalLine.md) for the invoices and credit notes in the specified date range
[Reporting/InvoiceJournal/{fromInvoiceNo}/{toInvoiceNo}](Route_GET_Reporting_InvoiceJournal__fromInvoiceNo___toInvoiceNo__options__options_.md)?options=&lt;options&gt;|GET|Gets [InvoiceJournalLine](Type_InvoiceJournalLine.md) for the invoices and credit notes with invoice number between two numbers.
[Reporting/InvoiceJournal/GetPdf/{id}](Route_GET_Reporting_InvoiceJournal_GetPdf__id__.md)|GET|Gets the PDF for an invoice or credit note with a id.
[Reporting/InvoiceJournal/SetExternalCaseNumber/{id}](Route_PUT_Reporting_InvoiceJournal_SetExternalCaseNumber__id__.md)|PUT|Sets the external case number.     This method is now obsolete, since we now have a specific service for debt collection ( DebtCollectionController ).


