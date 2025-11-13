
Supplier (Supplier)
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
DateOfBirth|Date|Gets or sets the date of birth.
EmailAddress|string|Gets or sets the email address.
ExternalCode|number|Gets or sets the external code. If this entity is imported with a number outside the number range for this type of party, this field will contain the imported original number.     This number has precedence over GoApi.Party.Party.Code when choosing which entity to use when importing files through the import service.     I.e. when importing OutgoingInvoices on the import service on a customer with Code 10000 - the import will choose the customer with ExternalCode 10000 over the customer with Code 10000.
ExternalImportReference|string|Gets or sets an external import reference that is unique within the account type (Customer, Supplier, Employee).     It can be edited by any integration - at any time.     Max length is 50 characters.
FirstName|string|Gets or sets the first name.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InternationalIdCountryCode|string|Gets or sets the international ID country code. Country code is given in ISO 3166-1 alfa-2 standard (Two characters).
InternationalIdNumber|string|Gets or sets the international ID number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
InternationalIdType|[InternationalIdType](Type_InternationalIdType.md)|Gets or sets the international ID type.
IsActive|boolean|Gets IsActive on Customer and Supplier.     This property reflects if an entity is currently a Customer and/or Supplier, depending on the endpoint queried.
IsArchived|boolean|Gets or sets a value indicating whether this party is archived (is inactive)
IsPerson|boolean|Gets or sets a value indicating whether this party is a private person.
LastChanged|Date|Gets the last changed date.
LastName|string|Gets or sets the last name.
LegalName|string|Gets or sets the legal name.
MailAddress|[Address](Type_Address.md)|Gets or sets the mail/postal address.
Name|string|Gets or sets the name.
PhoneNumber|string|Gets or sets the phone number.
ReportInternationalId|boolean|Gets or sets a value indicating whether International ID should be reported to Altinn.
Since|Date|Gets or sets when the customer or supplier first became a contact.
SocialSecurityNumber|string|Sets the social security number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
StandardGeneralLedgerAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets the agriculture department for the standard general ledger account
StandardGeneralLedgerAccountCode|number|Gets or sets the code of the standard [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that should be used when posting incoming invoices from this supplier.
StreetAddress|[Address](Type_Address.md)|OBSOLETE - Gets or sets the street address. This field is Obsolete but still exists due to backward compability. Use StreetAddresses instead.     If this entity does not have any street addresses, but has a mail address. This property will contain the GoApi.Party.Party.MailAddress . and GoApi.Party.Party.StreetAddresses will be an empty collection.
StreetAddresses|[Address](Type_Address.md)|Gets or sets the street addresses. Take note here that the full collection of street addresses must exist when updating this property.         For instance if the supplier has two addresses in PowerOffice Go, and the API only provides one of them in this property, the other one will be deleted.
SubledgerNumberSeriesId|string (Guid)|Sets the id to the [SubledgerNumberSeries](Type_SubledgerNumberSeries.md) the party should be applied to when creating it.
SupplierCreatedDate|Date|Gets date when contact first became a supplier
VatNumber|string|Gets or sets the vat number (Organization number).
WebsiteUrl|string|Gets or sets the website URL.
