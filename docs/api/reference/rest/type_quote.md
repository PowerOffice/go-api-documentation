
Quote (Quote)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Balance|number|Gets the remaining amount to be paid on this invoice. This field will only have a value on sent or paid invoices and is shown in the client's default currency code.
BrandingThemeCode|string|Gets or sets the code of the branding theme to be used when sending this invoice.
Cid|string|Gets the cid. This field will only have a value on sent invoices. (Norwegian: KID)
ContactGroup|string|The contact group name. Will be returned from PowerOffice Go if GoApi.Invoices.OutgoingInvoice.ContactGroupId is set
ContactGroupId|number|The contact group Id. Is set if the invoice is a group invoice. Set this to a valid [ContactGroup](Type_ContactGroup.md) identifier if the invoice is a group invoice.         It is not possible to set GoApi.Invoices.OutgoingInvoice.CustomerCode and ContactGroupId on the same invoice.
ContractNo|string|Gets or sets the contract no.
CreatedDate|Date|Gets the date this entity was created.
CurrencyCode|string|Gets or sets the currency code of the outgoing invoice.
CurrencyExchangeRate|number|Gets or sets an normalized (always base 1) currency exchange rate.
CustomerCode|number|Gets or sets the code of the [Customer](Type_Customer.md) that this invoice should be delivered to.         It is not possible to set GoApi.Invoices.OutgoingInvoice.ContactGroupId and CustomerCode on the same invoice.
CustomerEmail|string|Gets the customer email address. On sent invoices this field will contain the email the invoice was delivered to if the delivery type was GoApi.Common.InvoiceDeliveryType.PdfByEmail .
CustomerReference|string|Gets or sets the customer reference.
CustomerReferenceContactPersonId|number|Gets or sets the customer reference contact person id. This property will be used instead of CustomerReference if provided. The customer must have a contact person with this ID created to use this property.
CustomMatchingReference|string|Gets or sets the custom matching reference. This value will be matched with the sub ledger entries on vouchers with same CustomMatchingReference after posting.
DebtCollectionCaseStatus|[DebtCollectionCaseStatus](Type_DebtCollectionCaseStatus.md)|Gets the external [DebtCollectionCase](Type_DebtCollectionCase.md) status associated with this invoice.
DebtCollectionCode|string|Gets the external [DebtCollectionCase](Type_DebtCollectionCase.md) code.
DeliveryAddress1|string|Gets the delivery address' Address1 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddress2|string|Gets the delivery address Address2 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddressCity|string|Gets the delivery address City that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddressCountryCode|string|Gets the delivery address CountryCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddressId|number|Gets or sets the delivery address identifier.
DeliveryAddressZipCode|string|Gets the delivery address ZipCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryDate|Date|Gets or sets the delivery date.
DeliveryTerm|string|Gets or set the terms of delivery of the invoice.
DepartmentCode|string|Gets or sets code of the [Department](Type_Department.md) this invoice is for.         This code will be inherited on all OutgoingInvoiceLines unless "-1" (no department) is specified.
Dim1Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 1 this invoice is for.
Dim2Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 2 this invoice is for.
Dim3Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 3 this invoice is for.
DocumentNo|string|Gets the document no (invoice number). This field will only have a value on sent invoices.
DueDate|Date|Gets the due date. This is the due date on the invoice that was sent from PowerOffice Go and will only have a value on sent invoices.
ExpectedDueDate|Date|Gets the expected due date. This is the date when the invoice is expected to be paid by a customer.         In essence this is an override of GoApi.Invoices.OutgoingInvoice.DueDate , that is set by a user in PowerOffice Go after the invoice has been delivered.         This field will only have a value on sent invoices.
ExpiryDate|Date|Gets or sets the expiry date of the quote.
ExternalImportReference|string|Gets or sets an external import reference. Can be used to correlate/duplicate check invoices.     Must be a unique value for a given client, exception will be thrown if an OutgoingInvoice with equal import reference exists.     Max length is 50 characters.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
ImportedOrderNo|number|Gets or sets the imported order no. This should be set as the order number in the external system.
InvoiceDebtCollectionStatus|[DebtCollectionStatus](Type_DebtCollectionStatus.md)|Gets the internal debt collection status associated with this invoice.
InvoiceDeliveryType|[InvoiceDeliveryType](Type_InvoiceDeliveryType.md)|Gets the type of the invoice delivery. This is the means of delivery that was used when the invoice was delivered by PowerOffice Go.
InvoiceNo|number|Gets the invoice number in number format. Available only for sent and posted invoices.
IsInvoiceBeingProcessed|boolean|Get current delivery invoice status. When true the invoice is under delivery.
LastChanged|Date|Gets the last changed date.
LastErrorMessage|string|If invoice delivery fails this property will contain the last error message.
LocationCode|string|Gets the code of the [Location](Type_Location.md) this invoice is for.
NetAmount|number|Gets the net amount of the invoice. This is calculated from the GoApi.Invoices.OutgoingInvoice.OutgoingInvoiceLines .
OrderDate|Date|Gets or sets the order date.
OrderNo|number|Gets the order no. This value is auto generated when saving a new OutgoingInvoice.
OurReferenceEmployeeCode|number|Gets or sets code of the [Employee](Type_Employee.md) that is the sales person on this outgoing invoice.
OutgoingInvoiceLines|[OutgoingInvoiceLine](Type_OutgoingInvoiceLine.md)|Gets the outgoing invoice lines ( [OutgoingInvoiceLine](Type_OutgoingInvoiceLine.md) .         Trying to add more then 10000 lines to an OutgoingInvoice will throw an exception when saving.
PaymentTerms|number|Gets or sets the payment terms. This is the number of days until the invoice is due after sending.
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) this invoice is for.         This code will be inherited on all OutgoingInvoiceLines unless "-1" (no project) is specified.
PurchaseOrderNo|string|Gets or sets the purchase order no.
QuoteAcceptanceDate|Date|Gets the date the quote was accepted by the customer.
QuoteAcceptanceStatus|[QuoteAcceptanceStatus](Type_QuoteAcceptanceStatus.md)|Gets the status of the quote. This can either be pending, accepted or rejected depending on how the customer reacted to the offer.
QuoteDate|Date|Gets or sets the date of the quote.
QuoteNo|number|Gets the Quote number. This is assigned by PowerOffice Go when saving.
RelatedDocumentNo|string|Gets or sets the related DocumentNo linking the original invoice.     Can be used when creating credit notes.     If set on a credit note, this credit note will be matched with an invoice with the provided InvoiceNo / DocumentNo when the credit note is posted.
SentDate|Date|Gets the date the invoice was sent in Go. Only available for invoices sent from Go. Blank if the invoice was posted to Go using an import of the voucher.
Status|[OutgoingInvoiceStatus](Type_OutgoingInvoiceStatus.md)|Gets or sets the status. Invoices can only be set to status GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .         Defaults to GoApi.Invoices.OutgoingInvoiceStatus.Draft .
TotalAmount|number|Gets the total amount of the invoice. This is calculated from the GoApi.Invoices.OutgoingInvoice.OutgoingInvoiceLines .
VoucherDate|Date|Gets the voucher date. This is the date when the invoice was sent from PowerOffice Go and will only have a value on sent invoices.
VoucherNo|number|Gets the voucher number the invoice have. Only avaialble for sent invoices.
