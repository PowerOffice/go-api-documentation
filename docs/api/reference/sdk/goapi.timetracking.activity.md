
Activity
================

An activity detailing hour usage on a [TimeTrackingEntry](GoApi.TimeTracking.TimeTrackingEntry.md) .


### Properties
Name | Description
:----|:------------
[Id](GoApi.TimeTracking.Activity.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and         should be provided when an entity should be edited.         If this identifier is not provided, PowerOffice Go will try to create a new entity.
[ActivityType](GoApi.TimeTracking.Activity.ActivityType.md)|Gets or sets the type of the activity. This is a required property on new entities and cannot be set too GoApi.TimeTracking.ActivityType.None
[Code](GoApi.TimeTracking.Activity.Code.md)|Gets or sets the code. This is a required property and is unique per client with a max length of 50.
[CreatedFromImportJournalId](GoApi.TimeTracking.Activity.CreatedFromImportJournalId.md)|Gets the identifier of the [Import](GoApi.Import.Import.md) that created this activity.
[HourlyRate](GoApi.TimeTracking.Activity.HourlyRate.md)|Gets or sets the hourly rate.
[HourType](GoApi.TimeTracking.Activity.HourType.md)|Gets or sets the description of the [HourType](GoApi.TimeTracking.HourType.md) . If provided, there must exist an         HourType with the same description as this property. If no value is set this time tracking entry will default to         ordinary time.
[IsActive](GoApi.TimeTracking.Activity.IsActive.md)|Gets or sets a value indicating whether this activity is active. Defaults to true on new entities.
[IsLockedHourType](GoApi.TimeTracking.Activity.IsLockedHourType.md)|Lock the Hour type to the activity in the Time Sheet.         True: allow only this Hour type         False: use as default, but allowed to select another Hour Type
[LastChanged](GoApi.TimeTracking.Activity.LastChanged.md)|Gets the last changed date.
[Name](GoApi.TimeTracking.Activity.Name.md)|Gets or sets the name. This is a required property with a max length of 400.
[ProductCode](GoApi.TimeTracking.Activity.ProductCode.md)|Gets or sets the code of the [Product](GoApi.Products.Product.md) this activity uses when billing. Only the GoApi.TimeTracking.ActivityType.Billable activity type supports a product relation.
[RequireExternalComment](GoApi.TimeTracking.Activity.RequireExternalComment.md)|Determines if external comment is required for activity.
[RequireProject](GoApi.TimeTracking.Activity.RequireProject.md)|Determines if project is required for activity.
[UseEmployeeDefaultHourType](GoApi.TimeTracking.Activity.UseEmployeeDefaultHourType.md)|Use "Default Hour Type for Employee" as set/overridden on the Employees Contact Card or inherited from the Client         Time Tracking Setup.
[UseRegularHoursHourType](GoApi.TimeTracking.Activity.UseRegularHoursHourType.md)|Use "Regular Hours" (full time employment) Hour Type.

### Constructors
Name | Description
:----|:------------
[Activity()](GoApi.TimeTracking.Activity.Activity__.md)|



