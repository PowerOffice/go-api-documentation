
Budget (Budget)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BudgetLineItems|[BudgetLineItem](Type_BudgetLineItem.md)|Gets or sets the budget line items. The line items is of type [BudgetLineItem](Type_BudgetLineItem.md) .         Each line is representing the budgeted amount of a single account on a specific budget period (Month).
DepartmentCode|string|Gets or sets the code of the [Department](Type_Department.md) that this budget is for.
DepartmentName|string|Gets the name of the [Department](Type_Department.md) that this budget is for.
EndDate|Date|Gets the end date of the budget.
Id|string (Guid)|Gets or sets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
ManagerCode|number|Gets or sets the employee code of the manager on the budget. This is the code of the [Employee](Type_Employee.md) that is representing the manager.
ManagerName|string|Gets the name of the manager on the budget. This is the name of the [Employee](Type_Employee.md) that is representing the manager.
Name|string|Gets or sets the name of the budget.
StartDate|Date|Gets the start date of the budget.
Year|number|Gets or sets the financial year. The year should be the actual year at the financial year start.              Example: If the financial year is from 2019-01-01 to 2019-12-31 and the budget is for this year, this property should be 2019.         Example: If the financial year is from 2018-07-01 to 2019-06-30 and the budget is for this year, this property should be 2018.
