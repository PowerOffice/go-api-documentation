
Customer (Customer)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Code|number|Gets or sets the code.
ContactGroups|string|Gets or sets the contact groups. This collection will contain the names of all the [ContactGroup](Type_ContactGroup.md) the party is associated with.     If the collection is provided a contact group that does not exist, the contact group will be created when saving.
ContactPersonId|number|Gets or sets id of the primary [ContactPerson](Type_ContactPerson.md) on the party.
CreatedDate|Date|Gets the creation date.
CreatedFromImportJournalId|string (Guid)|Gets the if of the [Import](Type_Import.md) that created this party.
CurrencyCode|string|Gets or sets the currency code.
CustomerCreatedDate|Date|Gets date when contact first became a customer
DateOfBirth|Date|Gets or sets the date of birth.
DeliveryTerm|string|Gets or set the delivery term.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) this customer belongs to.
DiscountPercent|number|Gets or sets the fixed discount percent for this customer, this value should be between 0 and 100.     Can also be used to add a premium in percent of the sales price (usually markup) by having negative number. Negative numbers can be between -1000 and 0.
DoNotAddLatePaymentFees|boolean|Gets or sets a value indicating whether or not to add late payment fees when sending reminders to this customer.
DoNotAddLatePaymentInterest|boolean|Gets or sets a value indicating whether or not to add late payment interest when sending reminders to this customer.
EmailAddress|string|Gets or sets the email address.
ExternalCode|number|Gets or sets the external code. If this entity is imported with a number outside the number range for this type of party, this field will contain the imported original number.     This number has precedence over GoApi.Party.Party.Code when choosing which entity to use when importing files through the import service.     I.e. when importing OutgoingInvoices on the import service on a customer with Code 10000 - the import will choose the customer with ExternalCode 10000 over the customer with Code 10000.
ExternalImportReference|string|Gets or sets an external import reference that is unique within the account type (Customer, Supplier, Employee).     It can be edited by any integration - at any time.     Max length is 50 characters.
FirstName|string|Gets or sets the first name.
HourlyRate|number|Gets or sets the hourly rate to use when billing time to the Customer.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InternationalIdCountryCode|string|Gets or sets the international ID country code. Country code is given in ISO 3166-1 alfa-2 standard (Two characters).
InternationalIdNumber|string|Gets or sets the international ID number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
InternationalIdType|[InternationalIdType](Type_InternationalIdType.md)|Gets or sets the international ID type.
InvoiceBrandingThemeCode|string|Gets or sets the code of the [BrandingTheme](Type_BrandingTheme.md) used when sending invoices to this customer. If NULL, the clients default branding theme will be used.
InvoiceDeliveryType|[InvoiceDeliveryType](Type_InvoiceDeliveryType.md)|Gets or sets how invoices should be delivered to the customer.
InvoiceEmailAddress|string|Gets or sets the invoice email address.
InvoiceEmailAddressCC|string|Gets or sets the invoice email CC address. Up to 10 e-mail addresses can be set, semicolon separated. Max length of the string is 2000.
IsActive|boolean|Gets IsActive on Customer and Supplier.     This property reflects if an entity is currently a Customer and/or Supplier, depending on the endpoint queried.
IsArchived|boolean|Gets or sets a value indicating whether this party is archived (is inactive)
IsPerson|boolean|Gets or sets a value indicating whether this party is a private person.
IsVatFree|boolean|Gets or sets a value indicating whether this customer is vat free.     Sales against the customer will use the alternative sales account on the product or product group when posting the revenue if this is set to true.
LastChanged|Date|Gets the last changed date.
LastName|string|Gets or sets the last name.
LegalName|string|Gets or sets the legal name.
MailAddress|[Address](Type_Address.md)|Gets or sets the mail/postal address.
Name|string|Gets or sets the name.
NoticeOfDebtCollectionDeliveryType|[InvoiceDeliveryType](Type_InvoiceDeliveryType.md)|Gets or sets how notice of debt collection should be delivered to the customer.
OurReferenceEmployeeCode|number|Gets or sets the code of the [Employee](Type_Employee.md) of the sales person handling this customer (Our reference).
PaymentTerms|number|Gets or sets the payment terms. This is the default number of days after an invoice sent to this customer is due.
PhoneNumber|string|Gets or sets the phone number.
ReminderDeliveryType|[InvoiceDeliveryType](Type_InvoiceDeliveryType.md)|Gets or sets the how reminders should be delivered to the customer.
ReminderEmailAddress|string|Gets or sets the reminder email address. Used if ReminderDeliveryType and/or NoticeOfDebtCollectionDeliveryType uses email.
ReportInternationalId|boolean|Gets or sets a value indicating whether International ID should be reported to Altinn.
SendReminders|boolean|Gets or sets a value indicating whether to send reminders for this customer or not.
Since|Date|Gets or sets when the customer or supplier first became a contact.
SocialSecurityNumber|string|Sets the social security number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
StreetAddress|[Address](Type_Address.md)|OBSOLETE - Gets or sets the street address. This field is Obsolete but still exists due to backward compability. Use StreetAddresses instead.     If this entity does not have any street addresses, but has a mail address. This property will contain the GoApi.Party.Party.MailAddress . and GoApi.Party.Party.StreetAddresses will be an empty collection.
StreetAddresses|[Address](Type_Address.md)|Gets or sets the street addresses. Take note here that the full collection of street addresses must exist when updating this property.         For instance if the supplier has two addresses in PowerOffice Go, and the API only provides one of them in this property, the other one will be deleted.
SubledgerNumberSeriesId|string (Guid)|Sets the id to the [SubledgerNumberSeries](Type_SubledgerNumberSeries.md) the party should be applied to when creating it.
TransferToDebtCollectionAgency|boolean|Gets or sets a value indicating whether invoices to this customers should be transferred to a debt collection agency after it's due.
UseFactoring|boolean|Gets or sets a value indicating whether it's specified that invoices to this customer should use factoring.
UseInvoiceFee|boolean|Gets or sets whether invoice fee will be used when invoicing the customer. Relevant only if the client use invoice fee.
VatNumber|string|Gets or sets the vat number (Organization number).
WebsiteUrl|string|Gets or sets the website URL.
