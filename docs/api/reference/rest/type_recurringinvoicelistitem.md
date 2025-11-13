
RecurringInvoiceListItem (RecurringInvoiceListItem)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AutoClearExclusions|boolean|Gets or sets a flag indicating whether the ExceptMonth exception will occur only once (example: Invoice every month except july, but following years invoice every month)         Only applicable when GoApi.Invoices.RecurringInvoiceListItem.ExceptMonths is used.
Balance|number|Gets the remaining amount to be paid on this invoice. This field will only have a value on sent or paid invoices and is shown in the client's default currency code.
BrandingThemeCode|string|Gets the code of the [BrandingTheme](Type_BrandingTheme.md) to be used when sending this invoice.
Cid|string|Gets the cid. This field will only have a value on sent invoices. (Norwegian: KID)
ContactGroup|string|The [ContactGroup](Type_ContactGroup.md) name. Is set if the invoice is a group invoice.
ContactGroupId|number|The [ContactGroup](Type_ContactGroup.md) Id. Is set if the invoice is a group invoice.          It is not possible to set GoApi.Invoices.OutgoingInvoiceListItem.CustomerCode and ContactGroupId on the same invoice.
ContractNo|string|Gets the contract number.
CreatedDate|Date|Gets the date this entity was created.
CurrencyCode|string|Gets the currency code of the outgoing invoice.
CurrencyExchangeRate|number|Gets an normalized (always base 1) currency exchange rate.
CustomerCode|number|Gets the code of the [Customer](Type_Customer.md) that this invoice should be or was delivered to.         It is not possible to set GoApi.Invoices.OutgoingInvoiceListItem.ContactGroupId and CustomerCode on the same invoice.
CustomerEmail|string|Gets the customer email address. On sent invoices this field will contain the email the invoice was delivered to if the delivery type was GoApi.Common.InvoiceDeliveryType.PdfByEmail .
CustomerReference|string|Gets the customer reference.
CustomMatchingReference|string|Gets the custom matching reference. This value will be matched with vouchers with same CustomMatchingReference after posting.
DaysInAdvance|number|Indicates the number of days in advance this voucher should be created.
DebtCollectionCaseStatus|[DebtCollectionCaseStatus](Type_DebtCollectionCaseStatus.md)|Gets the external [DebtCollectionCase](Type_DebtCollectionCase.md) status associated with this invoice.
DebtCollectionCode|string|Gets the external [DebtCollectionCase](Type_DebtCollectionCase.md) code.
DeliveryAddress1|string|Gets the delivery address' Address1 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddress2|string|Gets the delivery address Address2 that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddressCity|string|Gets the delivery address City that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddressCountryCode|string|Gets the delivery address CountryCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryAddressId|number|Gets the delivery [Address](Type_Address.md) identifier.
DeliveryAddressZipCode|string|Gets the delivery address ZipCode that was set on the invoice when it was sent. Will only have a value on invoices with GoApi.Invoices.OutgoingInvoiceStatus.Sent , GoApi.Invoices.OutgoingInvoiceStatus.Paid and GoApi.Invoices.OutgoingInvoiceStatus.Archived .
DeliveryTerm|string|Gets the delivery term of the invoice.
DepartmentCode|string|Gets code of the [Department](Type_Department.md) this invoice is from.
Dim1Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 1 this invoice is for.
Dim2Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 2 this invoice is for.
Dim3Code|string|Gets the code of the [CustomDimensionValue](Type_CustomDimensionValue.md) 3 this invoice is for.
DocumentNo|string|Gets the document no (invoice number). This field will only have a value on sent invoices.
DueDate|Date|Gets the due date.
EndDate|Date|Determines if and when the recurring setup should be canceled and GoApi.Invoices.RecurringInvoiceListItem.IsActive set to *false* .
ExceptMonths|[Months](Type_Months.md)|One or several months can be without invoice.         Only applicable when monthly invoice, and only one invoice per month.
ExpectedDueDate|Date|Gets the expected due date.
ExternalImportReference|string|Gets ExternalImportReference. Can be used to correlate/duplicate check invoices. Must be a unique value for a given client. Max length is 50 characters.
Id|string (Guid)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved.
ImportedOrderNo|number|Gets the imported order no. This was set as the order number in the external system when the outgoing invoice was created.
InvoiceDebtCollectionStatus|[DebtCollectionStatus](Type_DebtCollectionStatus.md)|Gets the internal debt collection status associated with this invoice.
InvoiceDeliveryDate|Date|Gets the invoice delivery date.
InvoiceDeliveryType|[InvoiceDeliveryType](Type_InvoiceDeliveryType.md)|Gets the type of the invoice delivery. This is the means of delivery that was used when the invoice was delivered by PowerOffice Go.
InvoiceNo|number|Gets the invoice number in number format. Available only for sent and posted invoices.
IsActive|boolean|Gets or sets a value indicating whether the recurring invoice is instance is active.
IsInvoiceBeingProcessed|boolean|Get current delivery invoice status. When true the invoice is under delivery.
LastChanged|Date|Gets the last changed date.
LastErrorMessage|string|If invoice delivery fails this property will contain the last error message.
LocationCode|string|Gets the code of the [Location](Type_Location.md) this invoice is for.
NetAmount|number|Gets the net amount of the invoice. This is calculated from the lines of the outgoing invoice.
NextInvoiceDate|Date|The invoice date for the next invoice.
OrderDate|Date|Gets the order date.
OrderNo|number|Gets the order no. This value is auto generated when saving a new OutgoingInvoice.
OurReferenceEmployeeCode|number|Gets code of the [Employee](Type_Employee.md) that is the sales person on this outgoing invoice.
PaymentTerms|number|Gets the payment terms. This is the number of days until the invoice is due after sending.
ProjectCode|string|Gets the code of the [Project](Type_Project.md) this invoice is for.
PurchaseOrderNo|string|Gets the purchase order no.
RelatedDocumentNo|string|Gets the related DocumentNo linking the original invoice.     Can be used when creating credit notes.     If set on a credit note, this credit note will be matched with an invoice with the provided InvoiceNo / DocumentNo when the credit note is posted.
RepeatTimes|number|Determines how many times this recurring setup should repeat before being canceled and GoApi.Invoices.RecurringInvoiceListItem.IsActive set         to *false* . *null* means infinite.
SendFrequency|number|How often the associated invoice should be sent.
SendFrequencyUnit|[RecurringSendFrequencyUnit](Type_RecurringSendFrequencyUnit.md)|Specifies how often a recurring invoice should be sent.
SendMethod|[RecurringSendMethod](Type_RecurringSendMethod.md)|Determines how to send the associated invoice.
SentDate|Date|Gets the date the invoice was sent in Go. Only available for invoices sent from Go. Blank if the invoice was posted to Go using an import of the voucher.
Status|[OutgoingInvoiceStatus](Type_OutgoingInvoiceStatus.md)|Gets or sets the [OutgoingInvoiceStatus](Type_OutgoingInvoiceStatus.md) .
TotalAmount|number|Gets the total amount of the invoice. This is calculated from the lines of the outgoing invoice.
VoucherDate|Date|Gets the voucher date.
VoucherNo|number|Gets the voucher number the invoice have. Only avaialble for sent invoices.
