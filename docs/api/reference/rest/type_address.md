
Address (Address)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Address1|string|Gets or sets the first address line. This is usually used for street name or postal box.
Address2|string|Gets or sets the second address line. Used for additional specifications of the address.
Address3|string|OBSOLETE - Gets or sets the third address line. This property is no longer in use and will be removed on a later date.
City|string|Gets or sets the city.
CountryCode|string|Gets or sets the ISO 3166-1 alfa-2 country code (Two characters)
ExternalCode|string|Get or sets the external code - can be used to reference the address in the external system
Id|number|Gets or sets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsPrimary|boolean|Flag indicating whether or not this address is the primary delivery address. Primary delivery address will be suggested as the delivery address when creating new invoices.
LastChanged|Date|Gets or sets the last changed date (DateTimeOffset).
ZipCode|string|Gets or sets the zip code (postal code).
