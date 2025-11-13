
ExternallyDeliverableInvoice
================

Service to retrieve invoices ( [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) ) that should be sent by an external third party and update their status after sending with attachments.

**Base Url**: `https://api.poweroffice.net/ExternallyDeliverableInvoice/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[ExternallyDeliverableInvoice/](Route_GET_ExternallyDeliverableInvoice__options__options_.md)?options=&lt;options&gt;|GET|Gets all [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) filtered by an odata query.
[ExternallyDeliverableInvoice/delivered](Route_POST_ExternallyDeliverableInvoice_delivered_.md)|POST|Adds an history entry on the [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) that an invoice has been delivered with an optional file and comment.      Calling this will set GoApi.Invoices.ExternallyDeliverableInvoice.IsDelivered to true.
[ExternallyDeliverableInvoice/InvoiceEhf/{invoiceId}](Route_GET_ExternallyDeliverableInvoice_InvoiceEhf__invoiceId__.md)|GET|Get the ehf xml document for a [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) invoice by its Id as Stream.


