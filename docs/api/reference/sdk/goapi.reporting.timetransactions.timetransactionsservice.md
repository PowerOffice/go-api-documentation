
TimeTransactionsService
================

Service that provides methods for querying [TimeTransaction](GoApi.Reporting.TimeTransactions.TimeTransaction.md) on the client.     This is the preferred service to use for systems reporting time tracking entries.



### Constructors
Name | Description
:----|:------------
[TimeTransactionsService(IAuthorization authorization, Host host)](GoApi.Reporting.TimeTransactions.TimeTransactionsService.TimeTransactionsService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [TimeTransactionsService](GoApi.Reporting.TimeTransactions.TimeTransactionsService.md) class.

### Methods
Name | Description
:----|:------------
[Get(DateTime fromDate, DateTime toDate)](GoApi.Reporting.TimeTransactions.TimeTransactionsService.Get_DateTime_fromDate__DateTime_toDate_.md)|Gets all the [TimeTransaction](GoApi.Reporting.TimeTransactions.TimeTransaction.md) in the specified date range (FromDate - ToDate).
[Get(DateTime fromDate, DateTime toDate, Nullable&lt;System.long&gt; orderNo, Nullable&lt;System.long&gt; invoiceNo, Nullable&lt;System.long&gt; payrollNo)](GoApi.Reporting.TimeTransactions.TimeTransactionsService.Get_DateTime_fromDate__DateTime_toDate__Nullable_orderNo__Nullable_invoiceNo__Nullable_payrollNo_.md)|Gets all the [TimeTransaction](GoApi.Reporting.TimeTransactions.TimeTransaction.md) in the specified date range (FromDate - ToDate) and that matches the specified in-values.


