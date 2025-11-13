
AccrualBase
================

Specification used by [OutgoingInvoiceLine](GoApi.Invoices.OutgoingInvoiceLine.md) or to enable accrual of the [OutgoingInvoice](GoApi.Invoices.OutgoingInvoice.md) or [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) (Norwegian: Periodisering)


### Properties
Name | Description
:----|:------------
[BalanceAccountAgricultureDepartment](GoApi.Invoices.AccrualBase.BalanceAccountAgricultureDepartment.md)|Gets or sets the [AgricultureDepartment](GoApi.Common.AgricultureDepartment.md) of the balance account to be used for accrual.
[BalanceAccountCode](GoApi.Invoices.AccrualBase.BalanceAccountCode.md)|The code of the [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) used for keeping accrual balance. (Norwegian: Balansekonto)
[FromDate](GoApi.Invoices.AccrualBase.FromDate.md)|Start date of accrual.     If the invoice is a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) , NumOfMonths should be used instead.
[IsActive](GoApi.Invoices.AccrualBase.IsActive.md)|States if accrual is active or not.
[ToDate](GoApi.Invoices.AccrualBase.ToDate.md)|End date of accrual.     If the invoice is a [RecurringInvoice](GoApi.Invoices.RecurringInvoice.md) , NumOfMonths should be used instead.

### Constructors
Name | Description
:----|:------------
[AccrualBase()](GoApi.Invoices.AccrualBase.AccrualBase__.md)|



