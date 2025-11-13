
ExternallyDeliverableInvoiceDeliveredRequest (ExternallyDeliverableInvoiceDeliveredRequest)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Comment|string|Optional comment that will be displayed as a history entry on the voucher.
ExemptDebtCollection|boolean|Flag indicating that the invoice should not go to debt collection. When this is set to true, the invoice is set "on hold" in Go.
ExternallyDeliverableInvoiceId|string (Guid)|The id of the invoice / credit note that has been delivered.
File|[ExternallyDeliverableInvoiceDocumentationFile](Type_ExternallyDeliverableInvoiceDocumentationFile.md)|Optional file containing the documentation of the voucher that has been sent, this can be downloaded by a user through the history entry on the voucher in Go.
