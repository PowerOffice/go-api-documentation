
BudgetLineItem
================

BudgetLineItem representing the items for the different lines in the budget.         Each line is representing the budgeted amount of a single account on a specific budget period (Month).


### Properties
Name | Description
:----|:------------
[AccountAgricultureDepartment](GoApi.Budget.BudgetLineItem.AccountAgricultureDepartment.md)|The agriculture department for the account on the budget line
[AccountCode](GoApi.Budget.BudgetLineItem.AccountCode.md)|Gets or sets the code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) that this budgeted amount is for.
[AccountName](GoApi.Budget.BudgetLineItem.AccountName.md)|Gets the account name. Cannot be assigned, but returns the name of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) on queries.
[Amount](GoApi.Budget.BudgetLineItem.Amount.md)|Gets or sets the budgeted amount for the given month, year and account.
[Month](GoApi.Budget.BudgetLineItem.Month.md)|Gets or sets the month number this amount is for. This follows the Gregorian calendar where the value 1 will always be January, value 2 will always be February, and so on.
[Year](GoApi.Budget.BudgetLineItem.Year.md)|Gets or sets the Gregorian Calendar Year. This might differ from the accounting year set on the [Budget](GoApi.Budget.Budget.md) if the client has deviating accounting years.

### Constructors
Name | Description
:----|:------------
[BudgetLineItem()](GoApi.Budget.BudgetLineItem.BudgetLineItem__.md)|



