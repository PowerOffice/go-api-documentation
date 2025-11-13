
OutgoingInvoiceListItem
================

OutgoingInvoiceListItem representing an Outgoing Invoice without details - this is a lightweight version of an [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.Invoices.OutgoingInvoiceListItem.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
[Balance](GoApi.Invoices.OutgoingInvoiceListItem.Balance.md)|Gets the remaining amount to be paid on this invoice. This field will only have a value on sent or paid invoices and is shown in the client's default currency code.
[BrandingThemeCode](GoApi.Invoices.OutgoingInvoiceListItem.BrandingThemeCode.md)|Gets the code of the [BrandingTheme](GoApi.Invoices.BrandingTheme.md) to be used when sending this invoice.
[Cid](GoApi.Invoices.OutgoingInvoiceListItem.Cid.md)|Gets the cid. This field will only have a value on sent invoices. (Norwegian: KID)
[ContactGroup](GoApi.Invoices.OutgoingInvoiceListItem.ContactGroup.md)|The [ContactGroup](GoApi.Party.ContactGroup.md) name. Is set if the invoice is a group invoice.
[ContactGroupId](GoApi.Invoices.OutgoingInvoiceListItem.ContactGroupId.md)|The [ContactGroup](GoApi.Party.ContactGroup.md) Id. Is set if the invoice is a group invoice.          It is not possible to set GoApi.Invoices.OutgoingInvoiceListItem.CustomerCode and ContactGroupId on the same invoice.
[ContractNo](GoApi.Invoices.OutgoingInvoiceListItem.ContractNo.md)|Gets the contract number.
[CreatedDate](GoApi.Invoices.OutgoingInvoiceListItem.CreatedDate.md)|Gets the date this entity was created.
[CurrencyCode](GoApi.Invoices.OutgoingInvoiceListItem.CurrencyCode.md)|Gets the currency code of the outgoing invoice.
[CurrencyExchangeRate](GoApi.Invoices.OutgoingInvoiceListItem.CurrencyExchangeRate.md)|Gets an normalized (always base 1) currency exchange rate.
[CustomerCode](GoApi.Invoices.OutgoingInvoiceListItem.CustomerCode.md)|Gets the code of the [Customer](GoApi.Party.Customer.md) that this invoice should be or was delivered to.         It is not possible to set GoApi.Invoices.OutgoingInvoiceListItem.ContactGroupId and CustomerCode on the same invoice.
[CustomerEmail](GoApi.Invoices.OutgoingInvoiceListItem.CustomerEmail.md)|Gets the customer email address. On sent invoices this field will contain the email the invoice was delivered to if the delivery type was GoApi.Common.InvoiceDeliveryType.PdfByEmail .
[CustomerReference](GoApi.Invoices.OutgoingInvoiceListItem.CustomerReference.md)|Gets the customer reference.
[CustomMatchingReference](GoApi.Invoices.OutgoingInvoiceListItem.CustomMatchingReference.md)|Gets the custom matching reference. This value will be matched with vouchers with same CustomMatchingReference after posting.
[DebtCollectionCaseStatus](GoApi.Invoices.OutgoingInvoiceListItem.DebtCollectionCaseStatus.md)|Gets the external [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) status associated with this invoice.
[DebtCollectionCode](GoApi.Invoices.OutgoingInvoiceListItem.DebtCollectionCode.md)|Gets the external [DebtCollectionCase](GoApi.DebtCollection.DebtCollectionCase.md) code.
[DeliveryAddress1](GoApi.Invoices.OutgoingInvoiceListItem.DeliveryAddress1.md)|Gets the delivery address' Address1 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddress2](GoApi.Invoices.OutgoingInvoiceListItem.DeliveryAddress2.md)|Gets the delivery address Address2 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddressCity](GoApi.Invoices.OutgoingInvoiceListItem.DeliveryAddressCity.md)|Gets the delivery address City that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddressCountryCode](GoApi.Invoices.OutgoingInvoiceListItem.DeliveryAddressCountryCode.md)|Gets the delivery address CountryCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryAddressId](GoApi.Invoices.OutgoingInvoiceListItem.DeliveryAddressId.md)|Gets the delivery [Address](GoApi.Common.Address.md) identifier.
[DeliveryAddressZipCode](GoApi.Invoices.OutgoingInvoiceListItem.DeliveryAddressZipCode.md)|Gets the delivery address ZipCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
[DeliveryTerm](GoApi.Invoices.OutgoingInvoiceListItem.DeliveryTerm.md)|Gets the delivery term of the invoice.
[DepartmentCode](GoApi.Invoices.OutgoingInvoiceListItem.DepartmentCode.md)|Gets code of the [Department](GoApi.Dimension.Department.md) this invoice is from.
[Dim1Code](GoApi.Invoices.OutgoingInvoiceListItem.Dim1Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 1 this invoice is for.
[Dim2Code](GoApi.Invoices.OutgoingInvoiceListItem.Dim2Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 2 this invoice is for.
[Dim3Code](GoApi.Invoices.OutgoingInvoiceListItem.Dim3Code.md)|Gets the code of the [CustomDimensionValue](GoApi.Dimension.CustomDimensionValue.md) 3 this invoice is for.
[DocumentNo](GoApi.Invoices.OutgoingInvoiceListItem.DocumentNo.md)|Gets the document no (invoice number). This field will only have a value on sent invoices.
[DueDate](GoApi.Invoices.OutgoingInvoiceListItem.DueDate.md)|Gets the due date.
[ExpectedDueDate](GoApi.Invoices.OutgoingInvoiceListItem.ExpectedDueDate.md)|Gets the expected due date.
[ExternalImportReference](GoApi.Invoices.OutgoingInvoiceListItem.ExternalImportReference.md)|Gets ExternalImportReference. Can be used to correlate/duplicate check invoices. Must be a unique value for a given client. Max length is 50 characters.
[ImportedOrderNo](GoApi.Invoices.OutgoingInvoiceListItem.ImportedOrderNo.md)|Gets the imported order no. This was set as the order number in the external system when the outgoing invoice was created.
[InvoiceDebtCollectionStatus](GoApi.Invoices.OutgoingInvoiceListItem.InvoiceDebtCollectionStatus.md)|Gets the internal debt collection status associated with this invoice.
[InvoiceDeliveryDate](GoApi.Invoices.OutgoingInvoiceListItem.InvoiceDeliveryDate.md)|Gets the invoice delivery date.
[InvoiceDeliveryType](GoApi.Invoices.OutgoingInvoiceListItem.InvoiceDeliveryType.md)|Gets the type of the invoice delivery. This is the means of delivery that was used when the invoice was delivered by PowerOffice Go.
[InvoiceNo](GoApi.Invoices.OutgoingInvoiceListItem.InvoiceNo.md)|Gets the invoice number in number format. Available only for sent and posted invoices.
[IsInvoiceBeingProcessed](GoApi.Invoices.OutgoingInvoiceListItem.IsInvoiceBeingProcessed.md)|Get current delivery invoice status. When true the invoice is under delivery.
[LastChanged](GoApi.Invoices.OutgoingInvoiceListItem.LastChanged.md)|Gets the last changed date.
[LastErrorMessage](GoApi.Invoices.OutgoingInvoiceListItem.LastErrorMessage.md)|If invoice delivery fails this property will contain the last error message.
[LocationCode](GoApi.Invoices.OutgoingInvoiceListItem.LocationCode.md)|Gets the code of the [Location](GoApi.Projects.Location.md) this invoice is for.
[NetAmount](GoApi.Invoices.OutgoingInvoiceListItem.NetAmount.md)|Gets the net amount of the invoice. This is calculated from the lines of the outgoing invoice.
[OrderDate](GoApi.Invoices.OutgoingInvoiceListItem.OrderDate.md)|Gets the order date.
[OrderNo](GoApi.Invoices.OutgoingInvoiceListItem.OrderNo.md)|Gets the order no. This value is auto generated when saving a new OutgoingInvoice.
[OurReferenceEmployeeCode](GoApi.Invoices.OutgoingInvoiceListItem.OurReferenceEmployeeCode.md)|Gets code of the [Employee](GoApi.Party.Employee.md) that is the sales person on this outgoing invoice.
[PaymentTerms](GoApi.Invoices.OutgoingInvoiceListItem.PaymentTerms.md)|Gets the payment terms. This is the number of days until the invoice is due after sending.
[ProjectCode](GoApi.Invoices.OutgoingInvoiceListItem.ProjectCode.md)|Gets the code of the [Project](GoApi.Projects.Project.md) this invoice is for.
[PurchaseOrderNo](GoApi.Invoices.OutgoingInvoiceListItem.PurchaseOrderNo.md)|Gets the purchase order no.
[RelatedDocumentNo](GoApi.Invoices.OutgoingInvoiceListItem.RelatedDocumentNo.md)|Gets the related DocumentNo linking the original invoice.     Can be used when creating credit notes.     If set on a credit note, this credit note will be matched with an invoice with the provided InvoiceNo / DocumentNo when the credit note is posted.
[SentDate](GoApi.Invoices.OutgoingInvoiceListItem.SentDate.md)|Gets the date the invoice was sent in Go. Only available for invoices sent from Go. Blank if the invoice was posted to Go using an import of the voucher.
[Status](GoApi.Invoices.OutgoingInvoiceListItem.Status.md)|Gets or sets the [OutgoingInvoiceStatus](GoApi.Invoices.OutgoingInvoiceStatus.md) .
[TotalAmount](GoApi.Invoices.OutgoingInvoiceListItem.TotalAmount.md)|Gets the total amount of the invoice. This is calculated from the lines of the outgoing invoice.
[VoucherDate](GoApi.Invoices.OutgoingInvoiceListItem.VoucherDate.md)|Gets the voucher date.
[VoucherNo](GoApi.Invoices.OutgoingInvoiceListItem.VoucherNo.md)|Gets the voucher number the invoice have. Only avaialble for sent invoices.

### Constructors
Name | Description
:----|:------------
[OutgoingInvoiceListItem()](GoApi.Invoices.OutgoingInvoiceListItem.OutgoingInvoiceListItem__.md)|



