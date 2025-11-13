
ExternallyDeliverableInvoiceDeliveredRequest
================

Request to be used when updating the status of a [ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md) that has been delivered by an external third party.


### Properties
Name | Description
:----|:------------
[Comment](GoApi.Invoices.ExternallyDeliverableInvoiceDeliveredRequest.Comment.md)|Optional comment that will be displayed as a history entry on the voucher.
[ExemptDebtCollection](GoApi.Invoices.ExternallyDeliverableInvoiceDeliveredRequest.ExemptDebtCollection.md)|Flag indicating that the invoice should not go to debt collection. When this is set to true, the invoice is set "on hold" in Go.
[ExternallyDeliverableInvoiceId](GoApi.Invoices.ExternallyDeliverableInvoiceDeliveredRequest.ExternallyDeliverableInvoiceId.md)|The id of the invoice / credit note that has been delivered.
[File](GoApi.Invoices.ExternallyDeliverableInvoiceDeliveredRequest.File.md)|Optional file containing the documentation of the voucher that has been sent, this can be downloaded by a user through the history entry on the voucher in Go.

### Constructors
Name | Description
:----|:------------
[ExternallyDeliverableInvoiceDeliveredRequest()](GoApi.Invoices.ExternallyDeliverableInvoiceDeliveredRequest.ExternallyDeliverableInvoiceDeliveredRequest__.md)|



