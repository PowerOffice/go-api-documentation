
FactoringInvoiceDetails (FactoringInvoiceDetails)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
CreatedDate|Date|Gets the date this entity was created.
CustomerCode|number|Gets the customer code.
CustomerEmail|string|Gets the customer email specified on this invoice.
DebtorEmailAddress|string|Gets the email address registered on the customer contact.
DebtorPhoneNumber|string|Gets the phone number registered on the customer contact.
DepartmentCode|string|Gets the department code associated with the invoice, if set in Go.
DepartmentName|string|Gets the name of the department associated with the invoice, if set in Go
DueDate|Date|Gets the due date.
FactoringInvoiceStatus|[FactoringInvoiceStatus](Type_FactoringInvoiceStatus.md)|Gets the current status of the factoring invoice.
FactoringInvoiceStatusDescription|string|Additional free text description of the GoApi.Factoring.FactoringInvoiceDetails.FactoringInvoiceStatus .
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved..
InvoiceDate|Date|Gets the invoice date.
InvoiceDeliveryDate|Date|Gets the invoice delivery date.
InvoiceNo|number|Gets the invoice number.
IsDelivered|boolean|Gets the flag indicating whether this invoice has already been delivered. The external third party can set this flag though the deliver method on the ExternalDeliverableInvoice service.
OriginalInvoiceNo|number|Gets the invoice number of the invoice that this credit note is created from. This value can only be set on vouchers that are credit notes.
ProjectCode|string|Gets the project code associated with the invoice, if set in Go.
ProjectName|string|Gets the name of the project associated with the invoice, if set in Go.
TotalAmount|number|Gets the total amount.
