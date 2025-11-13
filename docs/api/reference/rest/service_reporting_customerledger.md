
CustomerLedger
================

Service to query and matching [CustomerLedgerEntry](Type_CustomerLedgerEntry.md)

**Base Url**: `https://api.poweroffice.net/Reporting/CustomerLedger/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Reporting/CustomerLedger/](Route_GET_Reporting_CustomerLedger__toDate__toDate__options__options_.md)?toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets the [CustomerLedgerEntry](Type_CustomerLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.
[Reporting/CustomerLedger/](Route_GET_Reporting_CustomerLedger__fromDate__fromDate__toDate__toDate__options__options_.md)?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets the [CustomerLedgerEntry](Type_CustomerLedgerEntry.md) statement report between two dates. This includes open items and all entries that are already matched.
[Reporting/CustomerLedger/{matchId}](Route_GET_Reporting_CustomerLedger__matchId__options__options_.md)?options=&lt;options&gt;|GET|Gets all [CustomerLedgerEntry](Type_CustomerLedgerEntry.md) associated with a given match id.
[Reporting/CustomerLedger/MatchEntries](Route_POST_Reporting_CustomerLedger_MatchEntries_.md)|POST|Matches the [CustomerLedgerEntry](Type_CustomerLedgerEntry.md) provided in the match request by their ids.
[Reporting/CustomerLedger/UnmatchEntries](Route_POST_Reporting_CustomerLedger_UnmatchEntries_.md)|POST|Unmatches the [CustomerLedgerEntry](Type_CustomerLedgerEntry.md) provided in the match request by their ids.


