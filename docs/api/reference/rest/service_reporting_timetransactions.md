
TimeTransactions
================

Service for querying [TimeTransaction](Type_TimeTransaction.md) .         A detailed report for time tracking entries, and the preferred service to use for systems reporting time tracking         entries.

**Base Url**: `https://api.poweroffice.net/Reporting/TimeTransactions/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Reporting/TimeTransactions/](Route_GET_Reporting_TimeTransactions__fromDate__fromDate__toDate__toDate__options__options_.md)?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets a list of [TimeTransaction](Type_TimeTransaction.md) in the time-period specified with from- and to-DateTime filtered by         odata query.
[Reporting/TimeTransactions/](Route_GET_Reporting_TimeTransactions__fromDate__fromDate__toDate__toDate__orderNo__orderNo__invoiceNo__invoiceNo__payrollNo__payrollNo__options__options_.md)?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&orderNo=&lt;orderNo&gt;&invoiceNo=&lt;invoiceNo&gt;&payrollNo=&lt;payrollNo&gt;&options=&lt;options&gt;|GET|Gets a list of [TimeTransaction](Type_TimeTransaction.md) in the time-period specified with from- and to-DateTime and that         matches the other 3 in-paramteres filtered by odata query.


