
BudgetLineItem (BudgetLineItem)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
AccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|The agriculture department for the account on the budget line
AccountCode|number|Gets or sets the code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) that this budgeted amount is for.
AccountName|string|Gets the account name. Cannot be assigned, but returns the name of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) on queries.
Amount|number|Gets or sets the budgeted amount for the given month, year and account.
Month|number|Gets or sets the month number this amount is for. This follows the Gregorian calendar where the value 1 will always be January, value 2 will always be February, and so on.
Year|number|Gets or sets the Gregorian Calendar Year. This might differ from the accounting year set on the [Budget](Type_Budget.md) if the client has deviating accounting years.
