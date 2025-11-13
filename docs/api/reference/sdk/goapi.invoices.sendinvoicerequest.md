
SendInvoiceRequest
================

Class containing variables used when sending invoice. [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md)


### Properties
Name | Description
:----|:------------
[DeliveryType](GoApi.Invoices.SendInvoiceRequest.DeliveryType.md)|Gets or sets the type of delivery for the invoice.     If not provided or set to null; the delivery type will default to GoApi.Invoices.SendInvoiceDeliveryType.PdfByEmail if GoApi.Invoices.SendInvoiceRequest.SendByEhfIfPossible , GoApi.Invoices.SendInvoiceRequest.SendByEfakturaIfPossible or GoApi.Invoices.SendInvoiceRequest.SendByAvtaleGiroIfPossible is false or not available.
[Email](GoApi.Invoices.SendInvoiceRequest.Email.md)|Gets or sets the email-address the invoice will be sent to (depending on DeliveryType).
[InvoiceDate](GoApi.Invoices.SendInvoiceRequest.InvoiceDate.md)|Gets or sets the invoice date.
[InvoiceId](GoApi.Invoices.SendInvoiceRequest.InvoiceId.md)|Gets or sets the invoice Id.
[SendByAvtaleGiroIfPossible](GoApi.Invoices.SendInvoiceRequest.SendByAvtaleGiroIfPossible.md)|Gets or sets if the invoice should be sent by avtalegiro if possible.
[SendByEfakturaIfPossible](GoApi.Invoices.SendInvoiceRequest.SendByEfakturaIfPossible.md)|Gets or sets if the invoice should be sent by E-Faktura if possible.
[SendByEhfIfPossible](GoApi.Invoices.SendInvoiceRequest.SendByEhfIfPossible.md)|Gets or sets if the invoice should be sent by EHF is possible.

### Constructors
Name | Description
:----|:------------
[SendInvoiceRequest()](GoApi.Invoices.SendInvoiceRequest.SendInvoiceRequest__.md)|



