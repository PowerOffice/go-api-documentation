
AccountTransactions
================

Service for querying [AccountTransaction](Type_AccountTransaction.md) .         An AccountTransaction is representing an accounting entry. This is a single posted amount on a GeneralLedgerAccount .

**Base Url**: `https://api.poweroffice.net/Reporting/AccountTransactions/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Reporting/AccountTransactions/](Route_GET_Reporting_AccountTransactions__fromDate__fromDate__toDate__toDate__options__options_.md)?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets all the [AccountTransaction](Type_AccountTransaction.md) in the specified date range (FromDate - ToDate) filtered by odata query.
[Reporting/AccountTransactions/{accountCode}](Route_GET_Reporting_AccountTransactions__accountCode__fromDate__fromDate__toDate__toDate__options__options_.md)?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets all the [AccountTransaction](Type_AccountTransaction.md) on a given GeneralLedgerAccount by its account code in the specified date range (FromDate - ToDate) filtered by odata query.


