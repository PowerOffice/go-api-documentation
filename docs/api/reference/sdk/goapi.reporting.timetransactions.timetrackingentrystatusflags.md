
TimeTrackingEntryStatusFlags
================

Describes the status of an time tracking entry.

### Fields
Name |Value | Description
:----|:-----|:-----------
None|0|No status flag
PendingApproval|1|Pending approval status - the time tracking entry is sent for approval but not approved yet.
Approved|2|Approved status - the time tracking entry has been approved.
SentToPayroll|4|Sent To Payroll status - the time tracking entry has been sent to payroll.
Invoiced|8|Invoiced status - the time tracking entry has been billed/invoiced.
Accrued|16|Accrued status - the time tracking entry has been accrued.
RunningTimer|32|Running Timer status - the time tracking entry has a running stopwatch that has not been completed yet.
IsHolidayLeave|256|Linked to a Holiday Leave Entry, should be read-only


### Constructors
Name | Description
:----|:------------
[TimeTrackingEntryStatusFlags()](GoApi.Reporting.TimeTransactions.TimeTrackingEntryStatusFlags.TimeTrackingEntryStatusFlags__.md)|



