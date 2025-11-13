
CustomerOrSupplier
================

Base class for both Customer and Suppliers


### Properties
Name | Description
:----|:------------
[Id](GoApi.Party.Party.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[Code](GoApi.Party.Party.Code.md)|Gets or sets the code.
[ContactGroups](GoApi.Party.Party.ContactGroups.md)|Gets or sets the contact groups. This collection will contain the names of all the [ContactGroup](GoApi.Party.ContactGroup.md) the party is associated with.     If the collection is provided a contact group that does not exist, the contact group will be created when saving.
[ContactPersonId](GoApi.Party.CustomerOrSupplier.ContactPersonId.md)|Gets or sets id of the primary [ContactPerson](GoApi.Party.ContactPerson.md) on the party.
[CreatedDate](GoApi.Party.Party.CreatedDate.md)|Gets the creation date.
[CreatedFromImportJournalId](GoApi.Party.Party.CreatedFromImportJournalId.md)|Gets the if of the [Import](GoApi.Import.Import.md) that created this party.
[CurrencyCode](GoApi.Party.CustomerOrSupplier.CurrencyCode.md)|Gets or sets the currency code.
[DateOfBirth](GoApi.Party.Party.DateOfBirth.md)|Gets or sets the date of birth.
[EmailAddress](GoApi.Party.Party.EmailAddress.md)|Gets or sets the email address.
[ExternalCode](GoApi.Party.Party.ExternalCode.md)|Gets or sets the external code. If this entity is imported with a number outside the number range for this type of party, this field will contain the imported original number.     This number has precedence over GoApi.Party.Party.Code when choosing which entity to use when importing files through the import service.     I.e. when importing OutgoingInvoices on the import service on a customer with Code 10000 - the import will choose the customer with ExternalCode 10000 over the customer with Code 10000.
[ExternalImportReference](GoApi.Party.Party.ExternalImportReference.md)|Gets or sets an external import reference that is unique within the account type (Customer, Supplier, Employee).     It can be edited by any integration - at any time.     Max length is 50 characters.
[FirstName](GoApi.Party.Party.FirstName.md)|Gets or sets the first name.
[InternationalIdCountryCode](GoApi.Party.Party.InternationalIdCountryCode.md)|Gets or sets the international ID country code. Country code is given in ISO 3166-1 alfa-2 standard (Two characters).
[InternationalIdNumber](GoApi.Party.Party.InternationalIdNumber.md)|Gets or sets the international ID number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
[InternationalIdType](GoApi.Party.Party.InternationalIdType.md)|Gets or sets the international ID type.
[IsActive](GoApi.Party.CustomerOrSupplier.IsActive.md)|Gets IsActive on Customer and Supplier.     This property reflects if an entity is currently a Customer and/or Supplier, depending on the endpoint queried.
[IsArchived](GoApi.Party.Party.IsArchived.md)|Gets or sets a value indicating whether this party is archived (is inactive)
[IsPerson](GoApi.Party.CustomerOrSupplier.IsPerson.md)|Gets or sets a value indicating whether this party is a private person.
[LastChanged](GoApi.Party.Party.LastChanged.md)|Gets the last changed date.
[LastName](GoApi.Party.Party.LastName.md)|Gets or sets the last name.
[LegalName](GoApi.Party.CustomerOrSupplier.LegalName.md)|Gets or sets the legal name.
[MailAddress](GoApi.Party.Party.MailAddress.md)|Gets or sets the mail/postal address.
[Name](GoApi.Party.CustomerOrSupplier.Name.md)|Gets or sets the name.
[PhoneNumber](GoApi.Party.Party.PhoneNumber.md)|Gets or sets the phone number.
[ReportInternationalId](GoApi.Party.Party.ReportInternationalId.md)|Gets or sets a value indicating whether International ID should be reported to Altinn.
[Since](GoApi.Party.CustomerOrSupplier.Since.md)|Gets or sets when the customer or supplier first became a contact.
[SocialSecurityNumber](GoApi.Party.Party.SocialSecurityNumber.md)|Sets the social security number. For privacy reasons queries returns "hidden" if this field has a value and null if it's empty.
[StreetAddress](GoApi.Party.Party.StreetAddress.md)|OBSOLETE - Gets or sets the street address. This field is Obsolete but still exists due to backward compability. Use StreetAddresses instead.     If this entity does not have any street addresses, but has a mail address. This property will contain the GoApi.Party.Party.MailAddress . and GoApi.Party.Party.StreetAddresses will be an empty collection.
[StreetAddresses](GoApi.Party.Party.StreetAddresses.md)|Gets or sets the street addresses. Take note here that the full collection of street addresses must exist when updating this property.         For instance if the supplier has two addresses in PowerOffice Go, and the API only provides one of them in this property, the other one will be deleted.
[SubledgerNumberSeriesId](GoApi.Party.Party.SubledgerNumberSeriesId.md)|Sets the id to the [SubledgerNumberSeries](GoApi.AccountingSettings.SubledgerNumberSeries.md) the party should be applied to when creating it.
[VatNumber](GoApi.Party.CustomerOrSupplier.VatNumber.md)|Gets or sets the vat number (Organization number).
[WebsiteUrl](GoApi.Party.CustomerOrSupplier.WebsiteUrl.md)|Gets or sets the website URL.




