
DebtCollectionInvoice (DebtCollectionInvoice)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
CID|string|Gets the customer identification code (CID) (Norwegian: KID).
CurrencyCode|string|Gets the currency code.
CustomerCode|number|Gets the code of the [Customer](Type_Customer.md) that this invoice was sent to.
DueDate|Date|Gets the due date.
ExternalImportReference|string|Gets the ExternalImportReference that was provided when creating the invoice. This property can only contain a value if the invoice was generated outside PowerOffice Go.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
InvoiceDate|Date|Gets the invoice date.
InvoiceEmailAddress|string|Gets the email address to where the invoice was sent.
InvoiceNo|number|Gets the invoice number.
LastChanged|Date|Gets the last changed date.
LastReminderDueDate|Date|Gets the due date of the last sent reminder.
LastReminderEmailAddress|string|Gets the email address to where the last reminder was sent.
LastReminderSentDate|Date|Gets the date when the last reminder was sent.
LastReminderVoucherType|[VoucherType](Type_VoucherType.md)|Gets the voucher type of the last sent reminder. Used mainly to identify if it was a regular payment reminder or a notice of debt collection (Norwegian: purring eller inkassovarsel)
OriginalAmount|number|Gets the original amount in the currency invoiced.
OriginalPostedAmount|number|Gets the original amount in the clients currency.
RemainingAmount|number|Gets the remaining amount to be paid in the clients currency.
