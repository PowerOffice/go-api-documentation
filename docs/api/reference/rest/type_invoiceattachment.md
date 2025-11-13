
InvoiceAttachment (InvoiceAttachment)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Base64EncodedData|string|The data file encoded using base64. This property must be provided when adding new attachments.         To reduce the payloads when calling the GET function on the endpoint working with this object, this property will be empty when calling it as an IQueryable.         To get the attachment with the attachment data - the GET by ID method on the endpoint should be used.
FileName|string|The original name of the file and should contain the extension of the file (.xlsx/.pdf/.jpg etc.). This property must be provided when adding new attachments.
FileSizeInBytes|number|Gets the file size of the InvoiceAttachment in bytes. This value is calculated by PowerOffice Go after saving.
Id|number|Gets the identifier. This is assigned by Go after calling save.
InvoiceId|string (Guid)|The identifier of the [OutgoingInvoice](Type_OutgoingInvoice.md) or [RecurringInvoice](Type_RecurringInvoice.md) this attachment should be added to.
LastChanged|Date|Gets the DateTimeOffset for when this InvoiceAttachment was last edited.
