
TimeTrackingEntry
================

Time tracking entry representing time an [Employee](GoApi.Party.Employee.md) has worked on a specific activity.


### Properties
Name | Description
:----|:------------
[Id](GoApi.TimeTracking.TimeTrackingEntry.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[ActivityCode](GoApi.TimeTracking.TimeTrackingEntry.ActivityCode.md)|Gets or sets the code of the [Activity](GoApi.TimeTracking.Activity.md) . Required property on this entity.
[BillableAmount](GoApi.TimeTracking.TimeTrackingEntry.BillableAmount.md)|Gets the billable amount of the entry. This is calculated from Billable Hours (that includes markup), Hourly Rate and Discount and is the amount that this time tracking entry should bill when invoicing the customer.
[BillableHours](GoApi.TimeTracking.TimeTrackingEntry.BillableHours.md)|Gets or sets the billable hours of the entry.     If not provided, the number will default to the property Minutes (calculated to hours) including potential markup (TimeSpecification.CostPriceFactor) set in Go.     Cannot be changed if IsInvoiced is true. If provided, the billable time will be set accordingly in Go without markup effects. This property is only relevant for billable activity types.
[BreakTime](GoApi.TimeTracking.TimeTrackingEntry.BreakTime.md)|Gets or sets the break time minutes for entry.
[Comment](GoApi.TimeTracking.TimeTrackingEntry.Comment.md)|Gets or sets the external comment. Comment will be visible on invoice attachments in Go. Optional to set.
[CustomerCode](GoApi.TimeTracking.TimeTrackingEntry.CustomerCode.md)|Gets or sets the code of the [Customer](GoApi.Party.Customer.md) .
[Date](GoApi.TimeTracking.TimeTrackingEntry.Date.md)|Gets or sets the date.
[DepartmentCode](GoApi.TimeTracking.TimeTrackingEntry.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) .
[EmployeeCode](GoApi.TimeTracking.TimeTrackingEntry.EmployeeCode.md)|Gets or sets the code of the [Employee](GoApi.Party.Employee.md) . Required property on this entity.
[ExcludedFromPayroll](GoApi.TimeTracking.TimeTrackingEntry.ExcludedFromPayroll.md)|Gets or sets a value indicating whether this time tracking entry is should not be picked up by a payroll.      Setting this value to *true* makes Go Payroll ignore this time tracking entry when adding time transactions to the payroll.
[ExternalImportReference](GoApi.TimeTracking.TimeTrackingEntry.ExternalImportReference.md)|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check time transaction entry. Must be a unique value for a given client. Max length is 50 characters. If not set, duplicate check is not performed.
[FromTime](GoApi.TimeTracking.TimeTrackingEntry.FromTime.md)|Gets or sets the start time of the entry. Optional to set.     If GoApi.TimeTracking.TimeTrackingEntry.ToTime is provided, this property must be set.
[HourlyCost](GoApi.TimeTracking.TimeTrackingEntry.HourlyCost.md)|Gets or sets the actual cost per hour for this time transaction.     This rate should include any CostPriceFactor of time specification before alterations before being saved.     Example: If an employee cost per hour is 3, and CostPriceFactor is 2, 6 should be saved as HourlyCost for this entry.
[HourlyRate](GoApi.TimeTracking.TimeTrackingEntry.HourlyRate.md)|Gets or sets the hourly rate for this time transaction.
[Hours](GoApi.TimeTracking.TimeTrackingEntry.Hours.md)|OBSOLETE - Gets or sets the number of hours. Deprecated - use GoApi.TimeTracking.TimeTrackingEntry.Minutes instead.
[HourType](GoApi.TimeTracking.TimeTrackingEntry.HourType.md)|Gets or sets the description of the [HourType](GoApi.TimeTracking.HourType.md) . If provided, there must exist an HourType with the same description as this property. If no value is set this time tracking entry will default to ordinary time.
[InternalComment](GoApi.TimeTracking.TimeTrackingEntry.InternalComment.md)|Gets or sets an internal comment. Internal comments will not be visible on invoice attachments. Optional to set.
[IsInvoiced](GoApi.TimeTracking.TimeTrackingEntry.IsInvoiced.md)|Gets or sets a value indicating whether this instance is invoiced. Time tracking entries that have been transferred to invoice can no longer be edited.
[IsLocked](GoApi.TimeTracking.TimeTrackingEntry.IsLocked.md)|Gets a value indicating whether this instance is locked. Time tracking entries that have been invoiced, transferred to payroll, submitted for approval and/or is approved can no longer be edited.
[IsTransferedToPayroll](GoApi.TimeTracking.TimeTrackingEntry.IsTransferedToPayroll.md)|Gets a value indicating whether this instance is transferred to payroll. Time tracking entries that have been transferred to payroll can no longer be edited.
[LastChanged](GoApi.TimeTracking.TimeTrackingEntry.LastChanged.md)|Gets the last changed date.
[Minutes](GoApi.TimeTracking.TimeTrackingEntry.Minutes.md)|Gets or sets the elapsed time in minutes. Should always be provided ( GoApi.TimeTracking.TimeTrackingEntry.Hours is deprecated).     If GoApi.TimeTracking.TimeTrackingEntry.FromTime and GoApi.TimeTracking.TimeTrackingEntry.ToTime are provided, Minutes must correspond with the set times.
[OutgoingInvoiceLineId](GoApi.TimeTracking.TimeTrackingEntry.OutgoingInvoiceLineId.md)|Gets or sets the identifier of the [OutgoingInvoiceLine](GoApi.Invoices.OutgoingInvoiceLine.md) that this time tracking entry has been invoiced on.      The outgoing invoice line can either be for an invoice that is in draft mode or an invoice that is sent.      Setting this value to a valid outgoing invoice line id will set the GoApi.TimeTracking.TimeTrackingEntry.IsInvoiced to true and the status of the time tracking entry to invoiced, and it will no longer appear on new invoices created through billing.
[ProjectCode](GoApi.TimeTracking.TimeTrackingEntry.ProjectCode.md)|Gets or sets the code of the [Project](GoApi.Projects.Project.md) .
[ToTime](GoApi.TimeTracking.TimeTrackingEntry.ToTime.md)|Gets the end time of the entry.     Optional to set. If GoApi.TimeTracking.TimeTrackingEntry.FromTime is provided, this property must be set.

### Constructors
Name | Description
:----|:------------
[TimeTrackingEntry()](GoApi.TimeTracking.TimeTrackingEntry.TimeTrackingEntry__.md)|



