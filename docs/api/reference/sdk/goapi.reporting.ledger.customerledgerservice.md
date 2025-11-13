
CustomerLedgerService
================

Service providing methods for querying and matching customer sub ledger entries ( [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) ).



### Constructors
Name | Description
:----|:------------
[CustomerLedgerService(IAuthorization authorization)](GoApi.Reporting.Ledger.CustomerLedgerService.CustomerLedgerService_IAuthorization_authorization_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[CustomerLedgerService(IAuthorization authorization, Host host)](GoApi.Reporting.Ledger.CustomerLedgerService.CustomerLedgerService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[GetEntriesByMatchId(long matchId)](GoApi.Reporting.Ledger.CustomerLedgerService.GetEntriesByMatchId_Int64_matchId_.md)|Gets all [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) associated with a given match id.
[GetOpenItems(Nullable&lt;System.DateTime&gt; toDate)](GoApi.Reporting.Ledger.CustomerLedgerService.GetOpenItems_Nullable_toDate_.md)|Gets the [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.
[GetStatement(Nullable&lt;System.DateTime&gt; fromDate, Nullable&lt;System.DateTime&gt; toDate)](GoApi.Reporting.Ledger.CustomerLedgerService.GetStatement_Nullable_fromDate__Nullable_toDate_.md)|Gets the [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) statement report between two dates. This includes open items and all entries that are already matched.
[MatchEntries(MatchRequest matchRequest)](GoApi.Reporting.Ledger.CustomerLedgerService.MatchEntries_MatchRequest_matchRequest_.md)|Matches the [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) provided in the match request by their ids.
[UnmatchEntries(MatchRequest matchRequest)](GoApi.Reporting.Ledger.CustomerLedgerService.UnmatchEntries_MatchRequest_matchRequest_.md)|Unmatches the [CustomerLedgerEntry](GoApi.Reporting.Ledger.CustomerLedgerEntry.md) provided in the match request by their ids.


