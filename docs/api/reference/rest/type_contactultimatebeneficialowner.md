
ContactUltimateBeneficialOwner (ContactUltimateBeneficialOwner)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Address|string|Gets or sets the address of the ultimate beneficial owner.
CountryOfResidence|string|Gets or sets the country code of the ultimate beneficial owner residence.
FirstName|string|Gets or sets the first name.         Usage is recommended if the contact is a person.
GroundsForUBOStatus|string|Gets or sets grounds for UBO status.
HasVotingRights|boolean|Gets or sets if the ultimate beneficial owner has voting rights.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IdNumber|string|Gets or sets identification number of the ultimate beneficial owner.         This is usually a organization number if the ultimate beneficial owner is an organization.
IsPep|boolean|Gets or sets if the ultimate beneficial owner is politically exposed (PEP).
IsRca|boolean|Gets or sets if the ultimate beneficial owner has relatives or close associates of PEP
LastChanged|Date|Gets the last changed date.
LastName|string|Gets or sets the last name.         Usage is recommended if the contact is a person.
Name|string|OBSOLETE - Gets or sets the name. Replaced by FirstName and LastName.
PartyCustomerCode|number|Gets the code of the [Customer](Type_Customer.md) if the ultimate beneficial owner is connected to a customer
PartyId|number|Gets the id of the [Customer](Type_Customer.md) or [Supplier](Type_Supplier.md) this ultimate beneficial owner is for.
PartySupplierCode|number|Gets the code of the [Supplier](Type_Supplier.md) if the ultimate beneficial owner is connected to a customer
Share|number|Gets or sets the indirectly or directly owned percentage. This value should be between 0 and 1 - i.e. 50% ownership = 0.50
