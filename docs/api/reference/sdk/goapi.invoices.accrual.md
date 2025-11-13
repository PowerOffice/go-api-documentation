
Accrual
================

Specification used by [OutgoingInvoiceLine](GoApi.Invoices.OutgoingInvoiceLine.md) or to enable accrual of the [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) or [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) (Norwegian: Periodisering)


### Properties
Name | Description
:----|:------------
[BalanceAccountAgricultureDepartment](GoApi.Invoices.AccrualBase.BalanceAccountAgricultureDepartment.md)|Gets or sets the [AgricultureDepartment](GoApi.Common.AgricultureDepartment.md) of the balance account to be used for accrual.
[BalanceAccountCode](GoApi.Invoices.AccrualBase.BalanceAccountCode.md)|The code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) used for keeping accrual balance. (Norwegian: Balansekonto)
[FromDate](GoApi.Invoices.AccrualBase.FromDate.md)|Start date of accrual.     If the invoice is a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) , NumOfMonths should be used instead.
[IsActive](GoApi.Invoices.AccrualBase.IsActive.md)|States if accrual is active or not.
[NumOfMonths](GoApi.Invoices.Accrual.NumOfMonths.md)|Used by recurring invoice to specify the number of months the invoice should be accrued over.     This property will only be used if the accrual is on a line that is on a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md)
[ResultAccountAgricultureDepartment](GoApi.Invoices.Accrual.ResultAccountAgricultureDepartment.md)|Gets or sets the [AgricultureDepartment](GoApi.Common.AgricultureDepartment.md) of the result account to be used for accrual.
[ResultAccountCode](GoApi.Invoices.Accrual.ResultAccountCode.md)|The code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) used for posting the result. (Norwegian: Resultatkonto)
[ToDate](GoApi.Invoices.AccrualBase.ToDate.md)|End date of accrual.     If the invoice is a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) , NumOfMonths should be used instead.

### Constructors
Name | Description
:----|:------------
[Accrual()](GoApi.Invoices.Accrual.Accrual__.md)|



