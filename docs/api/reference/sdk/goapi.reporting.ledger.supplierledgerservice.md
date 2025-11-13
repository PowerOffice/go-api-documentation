
SupplierLedgerService
================

Service providing methods for querying and matching supplier sub ledger entries ( [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) ).



### Constructors
Name | Description
:----|:------------
[SupplierLedgerService(IAuthorization authorization)](GoApi.Reporting.Ledger.SupplierLedgerService.SupplierLedgerService_IAuthorization_authorization_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.
[SupplierLedgerService(IAuthorization authorization, Host host)](GoApi.Reporting.Ledger.SupplierLedgerService.SupplierLedgerService_IAuthorization_authorization__Host_host_.md)|Initializes a new instance of the [DataObjectCrudService&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;](GoApi.Core.DataObjectCrudService_GoApi.AccountingSettings.GeneralLedgerAccount_.md) class.

### Methods
Name | Description
:----|:------------
[GetEntriesByMatchId(long matchId)](GoApi.Reporting.Ledger.SupplierLedgerService.GetEntriesByMatchId_Int64_matchId_.md)|Gets all [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) associated with a match id.
[GetOpenItems(Nullable&lt;System.DateTime&gt; toDate)](GoApi.Reporting.Ledger.SupplierLedgerService.GetOpenItems_Nullable_toDate_.md)|Gets the [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.
[GetStatement(Nullable&lt;System.DateTime&gt; fromDate, Nullable&lt;System.DateTime&gt; toDate)](GoApi.Reporting.Ledger.SupplierLedgerService.GetStatement_Nullable_fromDate__Nullable_toDate_.md)|Gets the [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) statement report between two dates. This includes open items and all entries that are already matched.
[MatchEntries(MatchRequest matchRequest)](GoApi.Reporting.Ledger.SupplierLedgerService.MatchEntries_MatchRequest_matchRequest_.md)|Matches the [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) provided in the match request by their ids.
[UnmatchEntries(MatchRequest matchRequest)](GoApi.Reporting.Ledger.SupplierLedgerService.UnmatchEntries_MatchRequest_matchRequest_.md)|Unmatches the [SupplierLedgerEntry](GoApi.Reporting.Ledger.SupplierLedgerEntry.md) provided in the match request by their ids.


