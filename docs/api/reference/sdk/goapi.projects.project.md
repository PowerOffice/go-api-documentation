
Project
================

Project representing a Project that the client is conducting. This is one of the dimensions in the general ledger.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Projects.Project.Id.md)|Gets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[AllowAllActivities](GoApi.Projects.Project.AllowAllActivities.md)|Gets or sets a value indicating whether it's allowed to use all the available [Activity](GoApi.TimeTracking.Activity.md) when adding [TimeTrackingEntry](GoApi.TimeTracking.TimeTrackingEntry.md) on the project. If this is set to false, the activities allowed on the project should be specified through the ProjectActivity service ( [ProjectActivity](GoApi.Projects.ProjectActivity.md) )     If the project is a sub-project ( GoApi.Projects.Project.ParentProjectCode has a value), allow all activities means that this sub-project is allowed to use all the activities specified on the parent project.
[AllowAllEmployees](GoApi.Projects.Project.AllowAllEmployees.md)|Gets or sets a value indicating whether all [Employee](GoApi.Party.Employee.md) can work on this project. If this is set to false, the team members working on the project should be specified through the ProjectTeamMember service ( [ProjectTeamMember](GoApi.Projects.ProjectTeamMember.md) )     If the project is a sub-project ( GoApi.Projects.Project.ParentProjectCode has a value), allow all employees means that this sub-project is allowed to use all the team members specified on the parent project.
[AttachExpenseVouchersWhenBilling](GoApi.Projects.Project.AttachExpenseVouchersWhenBilling.md)|Gets or sets whether the original vouchers containing other expenses should be added as an attachment when billing this project.
[BillableRate](GoApi.Projects.Project.BillableRate.md)|Gets or sets the project billable rate. The GoApi.Projects.Project.BillingMethod must Time or Time and expense, and GoApi.Projects.Project.BillingHourlyRateSpecification must be Project when using this value.
[BillingHourlyRateSpecification](GoApi.Projects.Project.BillingHourlyRateSpecification.md)|Gets or sets where the hourly rate is retrieved from when billing the project to a customer.
[BillingMethod](GoApi.Projects.Project.BillingMethod.md)|Gets or sets the project billing method indicating how a project is billed to a customer.
[BrandingThemeCode](GoApi.Projects.Project.BrandingThemeCode.md)|Gets or sets code of the [BrandingTheme](GoApi.Invoices.BrandingTheme.md) used when billing this project.
[BudgetedCostOfGoods](GoApi.Projects.Project.BudgetedCostOfGoods.md)|Gets or sets the budgeted cost of goods on this project.
[BudgetedExpenseHours](GoApi.Projects.Project.BudgetedExpenseHours.md)|Gets or sets the budgeted total expense of all labor hours.
[BudgetedHourlyRate](GoApi.Projects.Project.BudgetedHourlyRate.md)|Gets or sets the overridden budgeted billable rate per labor hour.
[BudgetedHours](GoApi.Projects.Project.BudgetedHours.md)|Gets or sets the amount of hours budgeted.
[BudgetedOtherExpenses](GoApi.Projects.Project.BudgetedOtherExpenses.md)|Gets or sets the budgeted total expense on this project excluding labor hours.
[BudgetedRevenueBillableExpenses](GoApi.Projects.Project.BudgetedRevenueBillableExpenses.md)|OBSOLETE - Gets or sets the budgeted total revenue on this project excluding labor hours. This property is no longer in use, these values are now included in BudgetedTotalRevenue.
[BudgetedRevenueHours](GoApi.Projects.Project.BudgetedRevenueHours.md)|Gets or sets the budgeted total revenue from billing labor hours.
[BudgetedTotalRevenue](GoApi.Projects.Project.BudgetedTotalRevenue.md)|Gets or sets the budgeted total revenue on this project.
[Code](GoApi.Projects.Project.Code.md)|Gets or sets the code. This is a unique identification of the project.         For sub projects, the API will add the ParentProjectCode to the provided Code like this: "ParentProjectCode.Code".
[ContactPersonId](GoApi.Projects.Project.ContactPersonId.md)|Gets or sets the contact person id. This is the id for [ContactPerson](GoApi.Party.ContactPerson.md)
[ContractNo](GoApi.Projects.Project.ContractNo.md)|Gets or sets contract number for this project.
[CreatedDate](GoApi.Projects.Project.CreatedDate.md)|Gets the created date of the project. Can be used in filtering to query only new projects
[CreatedFromImportJournalId](GoApi.Projects.Project.CreatedFromImportJournalId.md)|Gets the identifier of the [Import](GoApi.Import.Import.md) that created this project.
[CustomerCode](GoApi.Projects.Project.CustomerCode.md)|Gets or sets the code of the [Customer](GoApi.Party.Customer.md) involved in this project.
[DeliveryTerms](GoApi.Projects.Project.DeliveryTerms.md)|Gets or sets the code of the [DeliveryTerm](GoApi.Invoices.DeliveryTerm.md) on this project.
[DenyTimeTracking](GoApi.Projects.Project.DenyTimeTracking.md)|Determines if time tracking is denied for this project.
[DepartmentCode](GoApi.Projects.Project.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) that is conducting the project.
[EndDate](GoApi.Projects.Project.EndDate.md)|Gets or sets the end date of the project.
[ExternalCode](GoApi.Projects.Project.ExternalCode.md)|Gets or sets the external code. This is the code the project had in the external system that generated the project.
[FixedPrice](GoApi.Projects.Project.FixedPrice.md)|Gets or sets the fixed price. The billing method must be Fixed price when using this value.
[HourlyRateFactorWithMarkup](GoApi.Projects.Project.HourlyRateFactorWithMarkup.md)|Gets or sets the overridden markup factor used when billing hours on this project. This is the factor including the amount, e.g. if it should be added a 50% increase to hourly rate by markup this value should be 1.5.
[HourlyRateMarkupDescription](GoApi.Projects.Project.HourlyRateMarkupDescription.md)|Gets or sets the description added to the invoice when markup of hourly rate is added.
[IsBillable](GoApi.Projects.Project.IsBillable.md)|Gets or sets a value indicating whether this project is billable.
[IsInternal](GoApi.Projects.Project.IsInternal.md)|Determines if this is an internal project. Internal projects are usually not associated with a paying [Customer](GoApi.Party.Customer.md) .
[LastChanged](GoApi.Projects.Project.LastChanged.md)|Gets the last changed date.
[LocationCode](GoApi.Projects.Project.LocationCode.md)|Gets or sets the code of the [Location](GoApi.Projects.Location.md) that this project is at.
[MarkupHourlyRateEnabled](GoApi.Projects.Project.MarkupHourlyRateEnabled.md)|Gets or sets whether markup should be added when billing hours on this project.
[MarkupOtherExpensesEnabled](GoApi.Projects.Project.MarkupOtherExpensesEnabled.md)|Gets or sets whether markup should be added when billing other expenses on this project.
[Name](GoApi.Projects.Project.Name.md)|Gets or sets the name of the project.
[OtherExpensesFactorWithMarkup](GoApi.Projects.Project.OtherExpensesFactorWithMarkup.md)|Gets or sets the overridden markup factor used when billing other expenses on this project. This is the factor including the amount, e.g. if it should be added a 50% increase to the expenses by markup this value should be 1.5.
[OtherExpensesMarkupDescription](GoApi.Projects.Project.OtherExpensesMarkupDescription.md)|Gets or sets the description added to the invoice when markup of expenses is added.
[ParentProjectCode](GoApi.Projects.Project.ParentProjectCode.md)|Gets or sets the code of the parent project. Mandatory for sub projects.         If the new project is a sub project, the ParentProjectCode must be set to the Code of the parent project. Otherwise it will be treated as a new main project.
[PaymentTerms](GoApi.Projects.Project.PaymentTerms.md)|Gets or sets the number of credit days when billing this project.
[Progress](GoApi.Projects.Project.Progress.md)|Gets or sets the project progress percentage. If set this must be a value between 0 and 100.
[ProjectManagerCode](GoApi.Projects.Project.ProjectManagerCode.md)|Gets or sets the code of the [Employee](GoApi.Party.Employee.md) that is the manager on this project.
[PurchaseOrderNo](GoApi.Projects.Project.PurchaseOrderNo.md)|Gets or sets the purchase order no that will appear on the invoice when billing this project.
[StartDate](GoApi.Projects.Project.StartDate.md)|Gets or sets the start date of the project.
[Status](GoApi.Projects.Project.Status.md)|Gets or sets the status of the project.

### Constructors
Name | Description
:----|:------------
[Project()](GoApi.Projects.Project.Project__.md)|



