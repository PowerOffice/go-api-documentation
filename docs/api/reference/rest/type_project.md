
Project (Project)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AllowAllActivities|boolean|Gets or sets a value indicating whether it's allowed to use all the available [Activity](Type_Activity.md) when adding [TimeTrackingEntry](Type_TimeTrackingEntry.md) on the project. If this is set to false, the activities allowed on the project should be specified through the ProjectActivity service ( [ProjectActivity](Type_ProjectActivity.md) )     If the project is a sub-project ( GoApi.Projects.Project.ParentProjectCode has a value), allow all activities means that this sub-project is allowed to use all the activities specified on the parent project.
AllowAllEmployees|boolean|Gets or sets a value indicating whether all [Employee](Type_Employee.md) can work on this project. If this is set to false, the team members working on the project should be specified through the ProjectTeamMember service ( [ProjectTeamMember](Type_ProjectTeamMember.md) )     If the project is a sub-project ( GoApi.Projects.Project.ParentProjectCode has a value), allow all employees means that this sub-project is allowed to use all the team members specified on the parent project.
AttachExpenseVouchersWhenBilling|boolean|Gets or sets whether the original vouchers containing other expenses should be added as an attachment when billing this project.
BillableRate|number|Gets or sets the project billable rate. The GoApi.Projects.Project.BillingMethod must Time or Time and expense, and GoApi.Projects.Project.BillingHourlyRateSpecification must be Project when using this value.
BillingHourlyRateSpecification|[HourlyRateSpecification](Type_HourlyRateSpecification.md)|Gets or sets where the hourly rate is retrieved from when billing the project to a customer.
BillingMethod|[ProjectBillingMethod](Type_ProjectBillingMethod.md)|Gets or sets the project billing method indicating how a project is billed to a customer.
BrandingThemeCode|string|Gets or sets code of the [BrandingTheme](Type_BrandingTheme.md) used when billing this project.
BudgetedCostOfGoods|number|Gets or sets the budgeted cost of goods on this project.
BudgetedExpenseHours|number|Gets or sets the budgeted total expense of all labor hours.
BudgetedHourlyRate|number|Gets or sets the overridden budgeted billable rate per labor hour.
BudgetedHours|number|Gets or sets the amount of hours budgeted.
BudgetedOtherExpenses|number|Gets or sets the budgeted total expense on this project excluding labor hours.
BudgetedRevenueBillableExpenses|number|OBSOLETE - Gets or sets the budgeted total revenue on this project excluding labor hours. This property is no longer in use, these values are now included in BudgetedTotalRevenue.
BudgetedRevenueHours|number|Gets or sets the budgeted total revenue from billing labor hours.
BudgetedTotalRevenue|number|Gets or sets the budgeted total revenue on this project.
Code|string|Gets or sets the code. This is a unique identification of the project.         For sub projects, the API will add the ParentProjectCode to the provided Code like this: "ParentProjectCode.Code".
ContactPersonId|number|Gets or sets the contact person id. This is the id for [ContactPerson](Type_ContactPerson.md)
ContractNo|string|Gets or sets contract number for this project.
CreatedDate|Date|Gets the created date of the project. Can be used in filtering to query only new projects
CreatedFromImportJournalId|string (Guid)|Gets the identifier of the [Import](Type_Import.md) that created this project.
CustomerCode|number|Gets or sets the code of the [Customer](Type_Customer.md) involved in this project.
DeliveryTerms|string|Gets or sets the code of the [DeliveryTerm](Type_DeliveryTerm.md) on this project.
DenyTimeTracking|boolean|Determines if time tracking is denied for this project.
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) that is conducting the project.
EndDate|Date|Gets or sets the end date of the project.
ExternalCode|number|Gets or sets the external code. This is the code the project had in the external system that generated the project.
FixedPrice|number|Gets or sets the fixed price. The billing method must be Fixed price when using this value.
HourlyRateFactorWithMarkup|number|Gets or sets the overridden markup factor used when billing hours on this project. This is the factor including the amount, e.g. if it should be added a 50% increase to hourly rate by markup this value should be 1.5.
HourlyRateMarkupDescription|string|Gets or sets the description added to the invoice when markup of hourly rate is added.
Id|number|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
IsBillable|boolean|Gets or sets a value indicating whether this project is billable.
IsInternal|boolean|Determines if this is an internal project. Internal projects are usually not associated with a paying [Customer](Type_Customer.md) .
LastChanged|Date|Gets the last changed date.
LocationCode|string|Gets or sets the code of the [Location](Type_Location.md) that this project is at.
MarkupHourlyRateEnabled|boolean|Gets or sets whether markup should be added when billing hours on this project.
MarkupOtherExpensesEnabled|boolean|Gets or sets whether markup should be added when billing other expenses on this project.
Name|string|Gets or sets the name of the project.
OtherExpensesFactorWithMarkup|number|Gets or sets the overridden markup factor used when billing other expenses on this project. This is the factor including the amount, e.g. if it should be added a 50% increase to the expenses by markup this value should be 1.5.
OtherExpensesMarkupDescription|string|Gets or sets the description added to the invoice when markup of expenses is added.
ParentProjectCode|string|Gets or sets the code of the parent project. Mandatory for sub projects.         If the new project is a sub project, the ParentProjectCode must be set to the Code of the parent project. Otherwise it will be treated as a new main project.
PaymentTerms|number|Gets or sets the number of credit days when billing this project.
Progress|number|Gets or sets the project progress percentage. If set this must be a value between 0 and 100.
ProjectManagerCode|number|Gets or sets the code of the [Employee](Type_Employee.md) that is the manager on this project.
PurchaseOrderNo|string|Gets or sets the purchase order no that will appear on the invoice when billing this project.
StartDate|Date|Gets or sets the start date of the project.
Status|[ProjectStatus](Type_ProjectStatus.md)|Gets or sets the status of the project.
