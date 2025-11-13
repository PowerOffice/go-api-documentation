
SendInvoiceRequest (SendInvoiceRequest)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
DeliveryType|[SendInvoiceDeliveryType](Type_SendInvoiceDeliveryType.md)|Gets or sets the type of delivery for the invoice.     If not provided or set to null; the delivery type will default to GoApi.Invoices.SendInvoiceDeliveryType.PdfByEmail if GoApi.Invoices.SendInvoiceRequest.SendByEhfIfPossible , GoApi.Invoices.SendInvoiceRequest.SendByEfakturaIfPossible or GoApi.Invoices.SendInvoiceRequest.SendByAvtaleGiroIfPossible is false or not available.
Email|string|Gets or sets the email-address the invoice will be sent to (depending on DeliveryType).
InvoiceDate|Date|Gets or sets the invoice date.
InvoiceId|string (Guid)|Gets or sets the invoice Id.
SendByAvtaleGiroIfPossible|boolean|Gets or sets if the invoice should be sent by avtalegiro if possible.
SendByEfakturaIfPossible|boolean|Gets or sets if the invoice should be sent by E-Faktura if possible.
SendByEhfIfPossible|boolean|Gets or sets if the invoice should be sent by EHF is possible.
