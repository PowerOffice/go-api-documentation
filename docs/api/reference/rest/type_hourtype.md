
HourType (HourType)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
CostPriceFactor|number|A multiplication factor used to determine how much the cost price should be altered. Defaults to 1. (100%)     Example: A person working 100% overtime, costs twice as much.
Description|string|Gets or sets the description on this Hour Type.
FlexTimeFactor|number|Gets or sets the multiplication factor used to determine how much of the flex time will be available after this hour type.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsActive|boolean|Gets or sets a value indicating whether this instance is active.
LastChanged|Date|Gets the last changed date.
PayItemCode|string|Gets or sets the code of the [PayItem](Type_PayItem.md) . Hours with this Hour Type will use this pay item when it's transferred to payroll.
