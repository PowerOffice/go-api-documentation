
AccrualBase (AccrualBase)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BalanceAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the [AgricultureDepartment](Type_AgricultureDepartment.md) of the balance account to be used for accrual.
BalanceAccountCode|number|The code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) used for keeping accrual balance. (Norwegian: Balansekonto)
FromDate|Date|Start date of accrual.     If the invoice is a [RecurringInvoice](Type_RecurringInvoice.md) , NumOfMonths should be used instead.
IsActive|boolean|States if accrual is active or not.
ToDate|Date|End date of accrual.     If the invoice is a [RecurringInvoice](Type_RecurringInvoice.md) , NumOfMonths should be used instead.
