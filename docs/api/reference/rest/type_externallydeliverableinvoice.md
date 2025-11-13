
ExternallyDeliverableInvoice (ExternallyDeliverableInvoice)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
CreatedDate|Date|Gets the date this entity was created.
CustomerCode|number|Gets the code of the [Customer](Type_Customer.md) that this invoice is to be delivered to.
CustomerEmail|string|Gets the customer email specified on this invoice.
DueDate|Date|Gets the due date of the invoice.
ExternalInvoiceDeliveryType|[ExternalInvoiceDeliveryType](Type_ExternalInvoiceDeliveryType.md)|Gets the type of delivery that is supposed to be used by the external third party.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved
InvoiceDate|Date|Gets the invoice date.
InvoiceDeliveryDate|Date|Gets the invoice delivery date.
InvoiceNo|number|Gets the invoice number.
IsDelivered|boolean|Gets the flag indicating whether this invoice has already been delivered. The external third party can set this flag though the deliver method on the ExternalDeliverableInvoice service.
TotalAmount|number|Gets the total amount of the invoice.
