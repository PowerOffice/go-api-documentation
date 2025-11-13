
SupplierLedger
================

Service providing methods for querying and matching supplier sub ledger entries ( [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) ).

**Base Url**: `https://api.poweroffice.net/Reporting/SupplierLedger/`


### Routes
 Route | Method | Description
:------|:-------|:------------
[Reporting/SupplierLedger/](Route_GET_Reporting_SupplierLedger__toDate__toDate__options__options_.md)?toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets the [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.
[Reporting/SupplierLedger/](Route_GET_Reporting_SupplierLedger__fromDate__fromDate__toDate__toDate__options__options_.md)?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;|GET|Gets the [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) statement report between two dates. This includes open items and all entries that are already matched.
[Reporting/SupplierLedger/{matchId}](Route_GET_Reporting_SupplierLedger__matchId__options__options_.md)?options=&lt;options&gt;|GET|Gets all [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) associated with a match id.
[Reporting/SupplierLedger/MatchEntries](Route_POST_Reporting_SupplierLedger_MatchEntries_.md)|POST|Matches the [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) provided in the match request by their ids.
[Reporting/SupplierLedger/UnmatchEntries](Route_POST_Reporting_SupplierLedger_UnmatchEntries_.md)|POST|Unmatches the [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) provided in the match request by their ids.


