
Budget
================

Budget containing an estimate of the clients planned incomes and expenditures for a set period of time.


### Properties
Name | Description
:----|:------------
[Id](GoApi.Budget.Budget.Id.md)|Gets or sets the identifier. This identifier is unique and assigned by PowerOffice Go when a new entity is saved, and should be provided when an entity should be edited.     If this identifier is not provided, PowerOffice Go will try to create a new entity.
[BudgetLineItems](GoApi.Budget.Budget.BudgetLineItems.md)|Gets or sets the budget line items. The line items is of type [BudgetLineItem](GoApi.Budget.BudgetLineItem.md) .         Each line is representing the budgeted amount of a single account on a specific budget period (Month).
[DepartmentCode](GoApi.Budget.Budget.DepartmentCode.md)|Gets or sets the code of the [Department](GoApi.Dimension.Department.md) that this budget is for.
[DepartmentName](GoApi.Budget.Budget.DepartmentName.md)|Gets the name of the [Department](GoApi.Dimension.Department.md) that this budget is for.
[EndDate](GoApi.Budget.Budget.EndDate.md)|Gets the end date of the budget.
[ManagerCode](GoApi.Budget.Budget.ManagerCode.md)|Gets or sets the employee code of the manager on the budget. This is the code of the [Employee](GoApi.Party.Employee.md) that is representing the manager.
[ManagerName](GoApi.Budget.Budget.ManagerName.md)|Gets the name of the manager on the budget. This is the name of the [Employee](GoApi.Party.Employee.md) that is representing the manager.
[Name](GoApi.Budget.Budget.Name.md)|Gets or sets the name of the budget.
[StartDate](GoApi.Budget.Budget.StartDate.md)|Gets the start date of the budget.
[Year](GoApi.Budget.Budget.Year.md)|Gets or sets the financial year. The year should be the actual year at the financial year start.              Example: If the financial year is from 2019-01-01 to 2019-12-31 and the budget is for this year, this property should be 2019.         Example: If the financial year is from 2018-07-01 to 2019-06-30 and the budget is for this year, this property should be 2018.

### Constructors
Name | Description
:----|:------------
[Budget()](GoApi.Budget.Budget.Budget__.md)|Initializes a new instance of the [Budget](GoApi.Budget.Budget.md) class.



