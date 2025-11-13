
HourType
================

Hour type specifying what kind of hour type is used on a [TimeTrackingEntry](GoApi.TimeTracking.TimeTrackingEntry.md) (Norwegian: Timeart)


### Properties
Name | Description
:----|:------------
[Id](GoApi.TimeTracking.HourType.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[CostPriceFactor](GoApi.TimeTracking.HourType.CostPriceFactor.md)|A multiplication factor used to determine how much the cost price should be altered. Defaults to 1. (100%)     Example: A person working 100% overtime, costs twice as much.
[Description](GoApi.TimeTracking.HourType.Description.md)|Gets or sets the description on this Hour Type.
[FlexTimeFactor](GoApi.TimeTracking.HourType.FlexTimeFactor.md)|Gets or sets the multiplication factor used to determine how much of the flex time will be available after this hour type.
[IsActive](GoApi.TimeTracking.HourType.IsActive.md)|Gets or sets a value indicating whether this instance is active.
[LastChanged](GoApi.TimeTracking.HourType.LastChanged.md)|Gets the last changed date.
[PayItemCode](GoApi.TimeTracking.HourType.PayItemCode.md)|Gets or sets the code of the [PayItem](GoApi.Payroll.PayItem.md) . Hours with this Hour Type will use this pay item when it's transferred to payroll.

### Constructors
Name | Description
:----|:------------
[HourType()](GoApi.TimeTracking.HourType.HourType__.md)|



