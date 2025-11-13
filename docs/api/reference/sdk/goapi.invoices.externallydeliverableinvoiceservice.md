
ExternallyDeliverableInvoiceService
================

Service providing methods to retrieve invoices ( [ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md) ) that should be sent by an external third party to a customer and update their status after sending with attachments.



### Constructors
Name | Description
:----|:------------
[ExternallyDeliverableInvoiceService(IAuthorization authorization)](GoApi.Invoices.ExternallyDeliverableInvoiceService.ExternallyDeliverableInvoiceService_IAuthorization_authorization_.md)|Initializes a new instance of the [ExternallyDeliverableInvoiceService](GoApi.Invoices.ExternallyDeliverableInvoiceService.md) class.
[ExternallyDeliverableInvoiceService(IAuthorization authorization, Host host)](GoApi.Invoices.ExternallyDeliverableInvoiceService.ExternallyDeliverableInvoiceService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [ExternallyDeliverableInvoiceService](GoApi.Invoices.ExternallyDeliverableInvoiceService.md) class.

### Methods
Name | Description
:----|:------------
[Delivered(ExternallyDeliverableInvoiceDeliveredRequest request)](GoApi.Invoices.ExternallyDeliverableInvoiceService.Delivered_ExternallyDeliverableInvoiceDeliveredRequest_request_.md)|Adds an history entry on the [ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md) that an invoice has been delivered with an optional file and comment.      Calling this will set GoApi.Invoices.ExternallyDeliverableInvoice.IsDelivered to true.
[Get()](GoApi.Invoices.ExternallyDeliverableInvoiceService.Get__.md)|Gets all [ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md) as a linq expressions.
[GetInvoiceEhf(Guid invoiceId)](GoApi.Invoices.ExternallyDeliverableInvoiceService.GetInvoiceEhf_Guid_invoiceId_.md)|Get the ehf xml document for a [ExternallyDeliverableInvoice](GoApi.Invoices.ExternallyDeliverableInvoice.md) invoice by its Id as Stream.


