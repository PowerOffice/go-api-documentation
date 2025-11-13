
InvoiceAttachment
================

InvoiceAttachment representing an attachment that has been added to a [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) or a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.Invoices.InvoiceAttachment.Id.md)|Gets the identifier. This is assigned by Go after calling save.
[Base64EncodedData](GoApi.Invoices.InvoiceAttachment.Base64EncodedData.md)|The data file encoded using base64. This property must be provided when adding new attachments.         To reduce the payloads when calling the GET function on the endpoint working with this object, this property will be empty when calling it as an IQueryable.         To get the attachment with the attachment data - the GET by ID method on the endpoint should be used.
[FileName](GoApi.Invoices.InvoiceAttachment.FileName.md)|The original name of the file and should contain the extension of the file (.xlsx/.pdf/.jpg etc.). This property must be provided when adding new attachments.
[FileSizeInBytes](GoApi.Invoices.InvoiceAttachment.FileSizeInBytes.md)|Gets the file size of the InvoiceAttachment in bytes. This value is calculated by PowerOffice Go after saving.
[InvoiceId](GoApi.Invoices.InvoiceAttachment.InvoiceId.md)|The identifier of the [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) or [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) this attachment should be added to.
[LastChanged](GoApi.Invoices.InvoiceAttachment.LastChanged.md)|Gets the DateTimeOffset for when this InvoiceAttachment was last edited.

### Constructors
Name | Description
:----|:------------
[InvoiceAttachment()](GoApi.Invoices.InvoiceAttachment.InvoiceAttachment__.md)|



