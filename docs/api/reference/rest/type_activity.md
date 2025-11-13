
Activity (Activity)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
ActivityType|[ActivityType](Type_ActivityType.md)|Gets or sets the type of the activity. This is a required property on new entities and cannot be set too GoApi.TimeTracking.ActivityType.None
Code|string|Gets or sets the code. This is a required property and is unique per client with a max length of 50.
CreatedFromImportJournalId|string (Guid)|Gets the identifier of the [Import](Type_Import.md) that created this activity.
HourlyRate|number|Gets or sets the hourly rate.
HourType|string|Gets or sets the description of the [HourType](Type_HourType.md) . If provided, there must exist an         HourType with the same description as this property. If no value is set this time tracking entry will default to         ordinary time.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and         should be provided when an entity should be edited.         If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsActive|boolean|Gets or sets a value indicating whether this activity is active. Defaults to true on new entities.
IsLockedHourType|boolean|Lock the Hour type to the activity in the Time Sheet.         True: allow only this Hour type         False: use as default, but allowed to select another Hour Type
LastChanged|Date|Gets the last changed date.
Name|string|Gets or sets the name. This is a required property with a max length of 400.
ProductCode|string|Gets or sets the code of the [Product](Type_Product.md) this activity uses when billing. Only the GoApi.TimeTracking.ActivityType.Billable activity type supports a product relation.
RequireExternalComment|boolean|Determines if external comment is required for activity.
RequireProject|boolean|Determines if project is required for activity.
UseEmployeeDefaultHourType|boolean|Use "Default Hour Type for Employee" as set/overridden on the Employees Contact Card or inherited from the Client         Time Tracking Setup.
UseRegularHoursHourType|boolean|Use "Regular Hours" (full time employment) Hour Type.
