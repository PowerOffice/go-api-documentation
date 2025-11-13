
VatCode (VatCode)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
Code|string|Gets or sets the code.
Description|string|Gets or sets the description.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsActive|boolean|Gets or sets a value indicating whether this instance is active.
IsCustom|boolean|Gets or sets a value indicating whether this VAT code is custom created.
IsVatCompensationCode|boolean|Gets or sets a value indicating whether this VAT code is a code used for VAT compensation
Name|string|Gets or sets the name.
Rate|number|Gets or sets the rate. This is a value between 0 and 100. With 0 representing 0% VAT and 100 representing 100% VAT.
ValidFrom|Date|Gets the date that this VAT code is active from.
Validto|Date|Gets the date which the VAT code expires.
VatBasisRatio|number|Gets or sets the VAT basis ratio (Norwegian: Forholdsmessig fradrag MVA). This is a value between 0 and 1. With 0 representing 0% VAT basis ratio and 1 representing 100% VAT basis ratio. Example: 1000 kr with 50% VAT basis ratio and 25% VAT rate is calculated: 1000 * 0.5 * 0.25 = 125 kr.
