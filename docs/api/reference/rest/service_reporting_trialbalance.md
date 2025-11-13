
TrialBalance
================

Service for querying [TrialBalanceLine](Type_TrialBalanceLine.md) .         A TrialBalanceLine representing the balance on a GeneralLedgerAccount (Norwegian: Saldobalanse).

**Base Url**: `https://api.poweroffice.net/Reporting/TrialBalance/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Reporting/TrialBalance/](Route_GET_Reporting_TrialBalance__options__options_.md)?options=&lt;options&gt;|GET|Get the trial balance as at today.
[Reporting/TrialBalance/](Route_GET_Reporting_TrialBalance__date__date__options__options_.md)?date=&lt;date&gt;&options=&lt;options&gt;|GET|Get the trial balance as at a specified date.
[Reporting/TrialBalance/{includeSubProject}/{showOnlyTransactionsWithoutDepartment}](Route_GET_Reporting_TrialBalance__includeSubProject___showOnlyTransactionsWithoutDepartment__date__date__departmentCode__departmentCode__productCode__productCode__projectCode__projectCode__options__options_.md)?date=&lt;date&gt;&departmentCode=&lt;departmentCode&gt;&productCode=&lt;productCode&gt;&projectCode=&lt;projectCode&gt;&options=&lt;options&gt;|GET|Get the trial balance as at a specified date. Filter by department-, product- and/or project-code. IMPORTANT: All parameters must be included in the request for this endpoint to be used. String parameters can be empty. Endpoint documentation is incorrect in REST version.


