
TrialBalanceService
================

Service for querying [TrialBalanceLine](GoApi.Reporting.TrialBalance.TrialBalanceLine.md) .         A TrialBalanceLine representing the balance on a [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) (Norwegian: Saldobalanse).



### Constructors
Name | Description
:----|:------------
[TrialBalanceService(IAuthorization authorization)](GoApi.Reporting.TrialBalance.TrialBalanceService.TrialBalanceService_IAuthorization_authorization_.md)|Initializes a new instance of the [TrialBalanceService](GoApi.Reporting.TrialBalance.TrialBalanceService.md) class.
[TrialBalanceService(IAuthorization authorization, Host host)](GoApi.Reporting.TrialBalance.TrialBalanceService.TrialBalanceService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [TrialBalanceService](GoApi.Reporting.TrialBalance.TrialBalanceService.md) class.

### Methods
Name | Description
:----|:------------
[Get(DateTime asAtDate)](GoApi.Reporting.TrialBalance.TrialBalanceService.Get_DateTime_asAtDate_.md)|Gets the trial balance as at the specified date represented as an IQueryable of [TrialBalanceLine](GoApi.Reporting.TrialBalance.TrialBalanceLine.md)
[Get(DateTime asAtDate, string departmentCode, string productCode, string projectCode, bool includeSubProject, bool showOnlyTransactionsWithoutDepartment)](GoApi.Reporting.TrialBalance.TrialBalanceService.Get_DateTime_asAtDate__String_departmentCode__String_productCode__String_projectCode__Boolean_includeSubProject__Boolean_showOnlyTransactionsWithoutDepartment_.md)|Gets the trial balance as at the specified date filtered by department-, product- and/or project-code, represented as an IQueryable of [TrialBalanceLine](GoApi.Reporting.TrialBalance.TrialBalanceLine.md)


