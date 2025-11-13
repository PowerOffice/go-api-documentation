
DebtCollectionInvoice
================

Debt collection invoice representing a customer invoice that is either ready for debt collection, or already added to a [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.DebtCollection.DebtCollectionInvoice.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
[CID](GoApi.DebtCollection.DebtCollectionInvoice.CID.md)|Gets the customer identification code (CID) (Norwegian: KID).
[CurrencyCode](GoApi.DebtCollection.DebtCollectionInvoice.CurrencyCode.md)|Gets the currency code.
[CustomerCode](GoApi.DebtCollection.DebtCollectionInvoice.CustomerCode.md)|Gets the code of the [Customer](GoApi.Party.Customer.md) that this invoice was sent to.
[DueDate](GoApi.DebtCollection.DebtCollectionInvoice.DueDate.md)|Gets the due date.
[ExternalImportReference](GoApi.DebtCollection.DebtCollectionInvoice.ExternalImportReference.md)|Gets the ExternalImportReference that was provided when creating the invoice. This property can only contain a value if the invoice was generated outside PowerOffice Go.
[InvoiceDate](GoApi.DebtCollection.DebtCollectionInvoice.InvoiceDate.md)|Gets the invoice date.
[InvoiceEmailAddress](GoApi.DebtCollection.DebtCollectionInvoice.InvoiceEmailAddress.md)|Gets the email address to where the invoice was sent.
[InvoiceNo](GoApi.DebtCollection.DebtCollectionInvoice.InvoiceNo.md)|Gets the invoice number.
[LastChanged](GoApi.DebtCollection.DebtCollectionInvoice.LastChanged.md)|Gets the last changed date.
[LastReminderDueDate](GoApi.DebtCollection.DebtCollectionInvoice.LastReminderDueDate.md)|Gets the due date of the last sent reminder.
[LastReminderEmailAddress](GoApi.DebtCollection.DebtCollectionInvoice.LastReminderEmailAddress.md)|Gets the email address to where the last reminder was sent.
[LastReminderSentDate](GoApi.DebtCollection.DebtCollectionInvoice.LastReminderSentDate.md)|Gets the date when the last reminder was sent.
[LastReminderVoucherType](GoApi.DebtCollection.DebtCollectionInvoice.LastReminderVoucherType.md)|Gets the voucher type of the last sent reminder. Used mainly to identify if it was a regular payment reminder or a notice of debt collection (Norwegian: purring eller inkassovarsel)
[OriginalAmount](GoApi.DebtCollection.DebtCollectionInvoice.OriginalAmount.md)|Gets the original amount in the currency invoiced.
[OriginalPostedAmount](GoApi.DebtCollection.DebtCollectionInvoice.OriginalPostedAmount.md)|Gets the original amount in the clients currency.
[RemainingAmount](GoApi.DebtCollection.DebtCollectionInvoice.RemainingAmount.md)|Gets the remaining amount to be paid in the clients currency.

### Constructors
Name | Description
:----|:------------
[DebtCollectionInvoice()](GoApi.DebtCollection.DebtCollectionInvoice.DebtCollectionInvoice__.md)|



