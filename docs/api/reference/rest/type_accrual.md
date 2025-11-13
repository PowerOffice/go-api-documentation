
Accrual (Accrual)
================



### Properties
Name | Type | Description
:----|:-----|:-----------
BalanceAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the [AgricultureDepartment](Type_AgricultureDepartment.md) of the balance account to be used for accrual.
BalanceAccountCode|number|The code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) used for keeping accrual balance. (Norwegian: Balansekonto)
FromDate|Date|Start date of accrual.     If the invoice is a [RecurringInvoice](Type_RecurringInvoice.md) , NumOfMonths should be used instead.
IsActive|boolean|States if accrual is active or not.
NumOfMonths|number|Used by recurring invoice to specify the number of months the invoice should be accrued over.     This property will only be used if the accrual is on a line that is on a [RecurringInvoice](Type_RecurringInvoice.md)
ResultAccountAgricultureDepartment|[AgricultureDepartment](Type_AgricultureDepartment.md)|Gets or sets the [AgricultureDepartment](Type_AgricultureDepartment.md) of the result account to be used for accrual.
ResultAccountCode|number|The code of the [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) used for posting the result. (Norwegian: Resultatkonto)
ToDate|Date|End date of accrual.     If the invoice is a [RecurringInvoice](Type_RecurringInvoice.md) , NumOfMonths should be used instead.
