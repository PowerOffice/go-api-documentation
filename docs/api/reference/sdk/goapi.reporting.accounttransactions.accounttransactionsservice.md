
AccountTransactionsService
================

Service for querying [AccountTransaction](GoApi.Reporting.AccountTransactions.AccountTransaction.md) .         An AccountTransaction is representing an accounting entry. This is a single posted amount on a [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) .



### Constructors
Name | Description
:----|:------------
[AccountTransactionsService(IAuthorization authorization)](GoApi.Reporting.AccountTransactions.AccountTransactionsService.AccountTransactionsService_IAuthorization_authorization_.md)|Initializes a new instance of the [AccountTransactionsService](GoApi.Reporting.AccountTransactions.AccountTransactionsService.md) class.
[AccountTransactionsService(IAuthorization authorization, Host host)](GoApi.Reporting.AccountTransactions.AccountTransactionsService.AccountTransactionsService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [AccountTransactionsService](GoApi.Reporting.AccountTransactions.AccountTransactionsService.md) class.

### Methods
Name | Description
:----|:------------
[Get(DateTime fromDate, DateTime toDate)](GoApi.Reporting.AccountTransactions.AccountTransactionsService.Get_DateTime_fromDate__DateTime_toDate_.md)|Gets all the [AccountTransaction](GoApi.Reporting.AccountTransactions.AccountTransaction.md) in the specified date range (FromDate - ToDate).
[Get(long accountCode, DateTime fromDate, DateTime toDate)](GoApi.Reporting.AccountTransactions.AccountTransactionsService.Get_Int64_accountCode__DateTime_fromDate__DateTime_toDate_.md)|Gets all the [AccountTransaction](GoApi.Reporting.AccountTransactions.AccountTransaction.md) on a given [GeneralLedgerAccount](GoApi.AccountingSettings.GeneralLedgerAccount.md) by its account code in the specified date range (FromDate - ToDate).


