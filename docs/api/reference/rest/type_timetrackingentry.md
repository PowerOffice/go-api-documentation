
TimeTrackingEntry (TimeTrackingEntry)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
ActivityCode|string|Gets or sets the code of the [Activity](Type_Activity.md) . Required property on this entity.
BillableAmount|number|Gets the billable amount of the entry. This is calculated from Billable Hours (that includes markup), Hourly Rate and Discount and is the amount that this time tracking entry should bill when invoicing the customer.
BillableHours|number|Gets or sets the billable hours of the entry.     If not provided, the number will default to the property Minutes (calculated to hours) including potential markup (TimeSpecification.CostPriceFactor) set in Go.     Cannot be changed if IsInvoiced is true. If provided, the billable time will be set accordingly in Go without markup effects. This property is only relevant for billable activity types.
BreakTime|number|Gets or sets the break time minutes for entry.
Comment|string|Gets or sets the external comment. Comment will be visible on invoice attachments in Go. Optional to set.
CustomerCode|number|Gets or sets the code of the [Customer](Type_Customer.md) .
Date|Date|Gets or sets the date.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) .
EmployeeCode|number|Gets or sets the code of the [Employee](Type_Employee.md) . Required property on this entity.
ExcludedFromPayroll|boolean|Gets or sets a value indicating whether this time tracking entry is should not be picked up by a payroll.      Setting this value to *true* makes Go Payroll ignore this time tracking entry when adding time transactions to the payroll.
ExternalImportReference|string|Gets or sets ExternalImportReference. Can be used to correlate/duplicate check time transaction entry. Must be a unique value for a given client. Max length is 50 characters. If not set, duplicate check is not performed.
FromTime|TimeSpan|Gets or sets the start time of the entry. Optional to set.     If GoApi.TimeTracking.TimeTrackingEntry.ToTime is provided, this property must be set.
HourlyCost|number|Gets or sets the actual cost per hour for this time transaction.     This rate should include any CostPriceFactor of time specification before alterations before being saved.     Example: If an employee cost per hour is 3, and CostPriceFactor is 2, 6 should be saved as HourlyCost for this entry.
HourlyRate|number|Gets or sets the hourly rate for this time transaction.
Hours|number|OBSOLETE - Gets or sets the number of hours. Deprecated - use GoApi.TimeTracking.TimeTrackingEntry.Minutes instead.
HourType|string|Gets or sets the description of the [HourType](Type_HourType.md) . If provided, there must exist an HourType with the same description as this property. If no value is set this time tracking entry will default to ordinary time.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
InternalComment|string|Gets or sets an internal comment. Internal comments will not be visible on invoice attachments. Optional to set.
IsInvoiced|boolean|Gets or sets a value indicating whether this instance is invoiced. Time tracking entries that have been transferred to invoice can no longer be edited.
IsLocked|boolean|Gets a value indicating whether this instance is locked. Time tracking entries that have been invoiced, transferred to payroll, submitted for approval and/or is approved can no longer be edited.
IsTransferedToPayroll|boolean|Gets a value indicating whether this instance is transferred to payroll. Time tracking entries that have been transferred to payroll can no longer be edited.
LastChanged|Date|Gets the last changed date.
Minutes|number|Gets or sets the elapsed time in minutes. Should always be provided ( GoApi.TimeTracking.TimeTrackingEntry.Hours is deprecated).     If GoApi.TimeTracking.TimeTrackingEntry.FromTime and GoApi.TimeTracking.TimeTrackingEntry.ToTime are provided, Minutes must correspond with the set times.
OutgoingInvoiceLineId|number|Gets or sets the identifier of the [OutgoingInvoiceLine](Type_OutgoingInvoiceLine.md) that this time tracking entry has been invoiced on.      The outgoing invoice line can either be for an invoice that is in draft mode or an invoice that is sent.      Setting this value to a valid outgoing invoice line id will set the GoApi.TimeTracking.TimeTrackingEntry.IsInvoiced to true and the status of the time tracking entry to invoiced, and it will no longer appear on new invoices created through billing.
ProjectCode|string|Gets or sets the code of the [Project](Type_Project.md) .
ToTime|TimeSpan|Gets the end time of the entry.     Optional to set. If GoApi.TimeTracking.TimeTrackingEntry.FromTime is provided, this property must be set.
