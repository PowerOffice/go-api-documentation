
RecurringInvoice
================

RecurringInvoice representing an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) that is repeated multiple times.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Invoices.OutgoingInvoice.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[AutoClearExclusions](GoApi.Invoices.RecurringInvoice.AutoClearExclusions.md)|Gets or sets a flag indicating whether the ExceptMonth exception will occur only once (example: Invoice every month except july, but following years invoice every month)         Only applicable when GoApi.Invoices.RecurringInvoice.ExceptMonths is used.
[Balance](GoApi.Invoices.OutgoingInvoice.Balance.md)|Gets the remaining amount to be paid on this invoice. This field will only have a value on sent or paid invoices and is shown in the client's default currency code.
[BrandingThemeCode](GoApi.Invoices.OutgoingInvoice.BrandingThemeCode.md)|Gets or sets the code of the branding theme to be used when sending this invoice.
[Cid](GoApi.Invoices.OutgoingInvoice.Cid.md)|Gets the cid. This field will only have a value on sent invoices. (Norwegian: KID)
[ContactGroup](GoApi.Invoices.OutgoingInvoice.ContactGroup.md)|The contact group name. Will be returned from PowerOffice Go if GoApi.Invoices.OutgoingInvoice.ContactGroupId is set
[ContactGroupId](GoApi.Invoices.OutgoingInvoice.ContactGroupId.md)|The contact group Id. Is set if the invoice is a group invoice. Set this to a valid [ContactGroup](GoApi.Party.ContactGroup.md) identifier if the invoice is a group invoice.         It is not possible to set GoApi.Invoices.OutgoingInvoice.CustomerCode and ContactGroupId on the same invoice.
[ContractNo](GoApi.Invoices.OutgoingInvoice.ContractNo.md)|Gets or sets the contract no.
[CreatedDate](GoApi.Invoices.OutgoingInvoice.CreatedDate.md)|Gets the date this entity was created.
[CurrencyCode](GoApi.Invoices.OutgoingInvoice.CurrencyCode.md)|Gets or sets the currency code of the outgoing invoice.
[CurrencyExchangeRate](GoApi.Invoices.OutgoingInvoice.CurrencyExchangeRate.md)|Gets or sets an normalized (always base 1) currency exchange rate.
[CustomerCode](GoApi.Invoices.OutgoingInvoice.CustomerCode.md)|Gets or sets the code of the [Customer](GoApi.Party.Customer.md) that this invoice should be delivered to.         It is not possible to set GoApi.Invoices.OutgoingInvoice.ContactGroupId and CustomerCode on the same invoice.
[CustomerEmail](GoApi.Invoices.OutgoingInvoice.CustomerEmail.md)|Gets the customer email address. On sent invoices this field will contain the email the invoice was delivered to if the delivery type was GoApi.Common.InvoiceDeliveryType.PdfByEmail .
[CustomerReference](GoApi.Invoices.OutgoingInvoice.CustomerReference.md)|Gets or sets the customer reference.
[CustomerReferenceContactPersonId](GoApi.Invoices.OutgoingInvoice.CustomerReferenceContactPersonId.md)|Gets or sets the customer reference contact person id. This property will be used instead of CustomerReference if provided. The customer must have a contact person with this ID created to use this property.
[CustomMatchingReference](GoApi.Invoices.OutgoingInvoice.CustomMatchingReference.md)|Gets or sets the custom matching reference. This value will be matched with the sub ledger entries on vouchers with same CustomMatchingReference after posting.
[DaysInAdvance](GoApi.Invoices.RecurringInvoice.DaysInAdvance.md)|Indicates the number of days in advance this voucher should be sent.
[DebtCollectionCaseStatus](GoApi.Invoices.OutgoingInvoice.DebtCollectionCaseStatus.md)|Gets the external [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) status associated with this invoice.
[DebtCollectionCode](GoApi.Invoices.OutgoingInvoice.DebtCollectionCode.md)|Gets the external [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) code.
[DeliveryAddress1](GoApi.Invoices.OutgoingInvoice.DeliveryAddress1.md)|Gets the delivery address' Address1 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddress2](GoApi.Invoices.OutgoingInvoice.DeliveryAddress2.md)|Gets the delivery address Address2 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddressCity](GoApi.Invoices.OutgoingInvoice.DeliveryAddressCity.md)|Gets the delivery address City that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddressCountryCode](GoApi.Invoices.OutgoingInvoice.DeliveryAddressCountryCode.md)|Gets the delivery address CountryCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddressId](GoApi.Invoices.OutgoingInvoice.DeliveryAddressId.md)|Gets or sets the delivery address identifier.
[DeliveryAddressZipCode](GoApi.Invoices.OutgoingInvoice.DeliveryAddressZipCode.md)|Gets the delivery address ZipCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryDate](GoApi.Invoices.OutgoingInvoice.DeliveryDate.md)|Gets or sets the delivery date.
[DeliveryTerm](GoApi.Invoices.OutgoingInvoice.DeliveryTerm.md)|Gets or set the terms of delivery of the invoice.
[DepartmentCode](GoApi.Invoices.OutgoingInvoice.DepartmentCode.md)|Gets or sets code of the [Department](GoApi.Dimension.Department.md) this invoice is for.         This code will be inherited on all OutgoingInvoiceLines unless "-1" (no department) is specified.
[Dim1Code](GoApi.Invoices.OutgoingInvoice.Dim1Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 1 this invoice is for.
[Dim2Code](GoApi.Invoices.OutgoingInvoice.Dim2Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 2 this invoice is for.
[Dim3Code](GoApi.Invoices.OutgoingInvoice.Dim3Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 3 this invoice is for.
[DocumentNo](GoApi.Invoices.OutgoingInvoice.DocumentNo.md)|Gets the document no (invoice number). This field will only have a value on sent invoices.
[DueDate](GoApi.Invoices.OutgoingInvoice.DueDate.md)|Gets the due date. This is the due date on the invoice that was sent from PowerOffice Go and will only have a value on sent invoices.
[EndDate](GoApi.Invoices.RecurringInvoice.EndDate.md)|Determines if and when the recurring setup should be canceled and GoApi.Invoices.RecurringInvoice.IsActive set to *false* .
[ExceptMonths](GoApi.Invoices.RecurringInvoice.ExceptMonths.md)|One or several months can be without invoice.         Only applicable when monthly invoice, and only one invoice per month.
[ExpectedDueDate](GoApi.Invoices.OutgoingInvoice.ExpectedDueDate.md)|Gets the expected due date. This is the date when the invoice is expected to be paid by a customer.         In essence this is an override of GoApi.Invoices.OutgoingInvoice.DueDate , that is set by a user in PowerOffice Go after the invoice has been delivered.         This field will only have a value on sent invoices.
[ExternalImportReference](GoApi.Invoices.OutgoingInvoice.ExternalImportReference.md)|Gets or sets an external import reference. Can be used to correlate/duplicate check invoices.     Must be a unique value for a given client, exception will be thrown if an OutgoingInvoice with equal import reference exists.     Max length is 50 characters.
[ImportedOrderNo](GoApi.Invoices.OutgoingInvoice.ImportedOrderNo.md)|Gets or sets the imported order no. This should be set as the order number in the external system.
[InvoiceDebtCollectionStatus](GoApi.Invoices.OutgoingInvoice.InvoiceDebtCollectionStatus.md)|Gets the internal debt collection status associated with this invoice.
[InvoiceDeliveryType](GoApi.Invoices.OutgoingInvoice.InvoiceDeliveryType.md)|Gets the type of the invoice delivery. This is the means of delivery that was used when the invoice was delivered by PowerOffice Go.
[InvoiceNo](GoApi.Invoices.OutgoingInvoice.InvoiceNo.md)|Gets the invoice number in number format. Available only for sent and posted invoices.
[IsActive](GoApi.Invoices.RecurringInvoice.IsActive.md)|Gets or sets a value indicating whether the recurring invoice is instance is active.
[IsInvoiceBeingProcessed](GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed.md)|Get current delivery invoice status. When true the invoice is under delivery.
[LastChanged](GoApi.Invoices.OutgoingInvoice.LastChanged.md)|Gets the last changed date.
[LastErrorMessage](GoApi.Invoices.OutgoingInvoice.LastErrorMessage.md)|If invoice delivery fails this property will contain the last error message.
[LocationCode](GoApi.Invoices.OutgoingInvoice.LocationCode.md)|Gets the code of the [Location](GoApi.Projects.Location.md) this invoice is for.
[NetAmount](GoApi.Invoices.OutgoingInvoice.NetAmount.md)|Gets the net amount of the invoice. This is calculated from the GoApi.Invoices.OutgoingInvoice.OutgoingInvoiceLines .
[NextInvoiceDate](GoApi.Invoices.RecurringInvoice.NextInvoiceDate.md)|The invoice date for the next invoice.
[OrderDate](GoApi.Invoices.OutgoingInvoice.OrderDate.md)|Gets or sets the order date.
[OrderNo](GoApi.Invoices.OutgoingInvoice.OrderNo.md)|Gets the order no. This value is auto generated when saving a new OutgoingInvoice.
[OurReferenceEmployeeCode](GoApi.Invoices.OutgoingInvoice.OurReferenceEmployeeCode.md)|Gets or sets code of the [Employee](GoApi.Party.Employee.md) that is the sales person on this outgoing invoice.
[OutgoingInvoiceLines](GoApi.Invoices.OutgoingInvoice.OutgoingInvoiceLines.md)|Gets the outgoing invoice lines ( [OutgoingInvoiceLine](GoApi.Invoices.OutgoingInvoiceLine.md) .         Trying to add more then 10000 lines to an OutgoingInvoice will throw an exception when saving.
[PaymentTerms](GoApi.Invoices.OutgoingInvoice.PaymentTerms.md)|Gets or sets the payment terms. This is the number of days until the invoice is due after sending.
[ProjectCode](GoApi.Invoices.OutgoingInvoice.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) this invoice is for.         This code will be inherited on all OutgoingInvoiceLines unless "-1" (no project) is specified.
[PurchaseOrderNo](GoApi.Invoices.OutgoingInvoice.PurchaseOrderNo.md)|Gets or sets the purchase order no.
[RelatedDocumentNo](GoApi.Invoices.OutgoingInvoice.RelatedDocumentNo.md)|Gets or sets the related DocumentNo linking the original invoice.     Can be used when creating credit notes.     If set on a credit note, this credit note will be matched with an invoice with the provided InvoiceNo / DocumentNo when the credit note is posted.
[RepeatTimes](GoApi.Invoices.RecurringInvoice.RepeatTimes.md)|Determines how many times this recurring setup should repeat before being canceled and GoApi.Invoices.RecurringInvoice.IsActive set         to *false* . *null* means infinite.
[SendFrequency](GoApi.Invoices.RecurringInvoice.SendFrequency.md)|How often the associated invoice should be sent.
[SendFrequencyUnit](GoApi.Invoices.RecurringInvoice.SendFrequencyUnit.md)|Specifies how often a recurring invoice should be sent.
[SendMethod](GoApi.Invoices.RecurringInvoice.SendMethod.md)|Determines how to send the associated invoice.
[SentDate](GoApi.Invoices.OutgoingInvoice.SentDate.md)|Gets the date the invoice was sent in Go. Only available for invoices sent from Go. Blank if the invoice was posted to Go using an import of the voucher.
[Status](GoApi.Invoices.OutgoingInvoice.Status.md)|Gets or sets the status. Invoices can only be set to status GoApi.Invoices.OutgoingInvoiceStatus.Draft or GoApi.Invoices.OutgoingInvoiceStatus.Approved .         Defaults to GoApi.Invoices.OutgoingInvoiceStatus.Draft .
[TotalAmount](GoApi.Invoices.OutgoingInvoice.TotalAmount.md)|Gets the total amount of the invoice. This is calculated from the GoApi.Invoices.OutgoingInvoice.OutgoingInvoiceLines .
[VoucherDate](GoApi.Invoices.OutgoingInvoice.VoucherDate.md)|Gets the voucher date. This is the date when the invoice was sent from PowerOffice Go and will only have a value on sent invoices.
[VoucherNo](GoApi.Invoices.OutgoingInvoice.VoucherNo.md)|Gets the voucher number the invoice have. Only avaialble for sent invoices.

### Constructors
Name | Description
:----|:------------
[RecurringInvoice()](GoApi.Invoices.RecurringInvoice.RecurringInvoice__.md)|



