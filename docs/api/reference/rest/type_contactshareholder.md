
ContactShareholder (ContactShareholder)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Address|string|Gets or sets the address of the shareholder.
CountryOfResidence|string|Gets or sets the country code of the shareholders residence.
FirstName|string|Gets or sets the first name.         Usage is recommended if the contact is a person.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IdNumber|string|Gets or sets identification number of the shareholder.         This is usually a organization number if the shareholder is an organization.
IsPep|boolean|Gets or sets if the shareholder is a politically exposed (PEP).
IsPerson|boolean|Gets or sets if the contact is a person. Otherwise the contact is a company.
IsRca|boolean|Gets or sets if the shareholder has relatives or close associates of PEP
LastChanged|Date|Gets the last changed date.
LastName|string|Gets or sets the last name.         Usage is recommended if the contact is a person.
Name|string|Gets or sets the name of the contact.
PartyCustomerCode|number|Gets the code of the [Customer](Type_Customer.md) if the shareholder is connected to a customer
PartyId|number|Gets the id of the [Customer](Type_Customer.md) or [Supplier](Type_Supplier.md) this shareholder is for.
PartySupplierCode|number|Gets the code of the [Supplier](Type_Supplier.md) if the shareholder is connected to a supplier
Share|number|Gets or sets the share percentage. This value should be between 0 and 1 - i.e. 50% ownership = 0.50
