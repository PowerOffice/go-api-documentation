
PartyBankAccount (PartyBankAccount)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BankCode|string|Gets or sets the bank code used in countries that does not support BicSwift.
BicSwift|string|Gets or sets the bic swift.
Code|string|Gets or sets the code. This is either a domestic bank account code or a IBAN number.
CountryCode|string|Gets or sets the country code.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsActive|boolean|Gets or sets a value indicating whether this bank account is active.
LastChanged|Date|Gets the last changed date.
PartyId|number|Gets the id of the party ( [Customer](Type_Customer.md) , [Supplier](Type_Supplier.md) or [Employee](Type_Employee.md) ) this bank account is for.
