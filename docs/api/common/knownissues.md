# Known Issues

## Endpoint access may be denied when the client lacks a required PowerOffice Go subscription

Some API endpoints require both the correct integration privileges and an active subscription to the related PowerOffice Go module. For example, TimeTracking endpoints require that the client has a valid Time subscription. If the subscription requirement is not met, the request may fail with `403 Forbidden` even when the integration appears to have the necessary endpoint privileges.

This can happen because the access token now includes subscription-based validation data. A client can therefore receive an access token where some privileges are marked as invalid for that specific client. In practice, this means the integration is authenticated successfully, but access to certain endpoints is still blocked.

If you encounter this issue, decode the JWT access token and check whether the `goInvalidPrivileges` field contains the endpoint privilege you are trying to use. You should also verify that the client has an active subscription for the required module in PowerOffice Go.

**This is expected behavior, and not an error on our end.**

### Example

A client without a valid Time subscription may see privileges such as `Reporting_TimeTransaction_Full` and `TimeTracking_Full` listed in `goInvalidPrivileges`. In that case, requests to TimeTracking-related endpoints will be rejected until the required subscription is enabled for the client.
```json
  {
    "goActiveClientSubscriptions": [
      "Accounting",
      "Payroll",
      "Quality"
    ],
    "goClientId": "CLIENTID",
    "goClientName": "Klienten AS",
    "goInvalidPrivileges": [
      "Reporting_TimeTransaction_Full",
      "TimeTracking_Full"
    ],
    "goUserId": "15faba1f-366b-4428-a72b-e10df7eeb998",
    "role": [
      "BankJournalVoucher_Full",
      "BankTransfer_Full",
      "Blob_Full"
    ]
  }
```

## OData
*A fix for this is scheduled for release 2026-04-28*

We are aware of an issue where users of our SDK is experiencing issues with datetime translation in queries.
The SDK translates datetime queries without time information (e.g. 2026-04-15) to 2026-04-15T00:00.

Example failing query
```csharp
var fromTransactionDate = new DateTime(2026-04-01);
var toTransactionDate = new DateTime(2026-04-15);

var timetrackings = api.TimeTracking.TimeTrackingEntry.Get()
    .Where(x => x.Date >= fromTransactionDate && Date < toTransactionDate).ToList();
```

### Temporary mitigation
Affected parties have been moved to old backend while we identify and implement a fix for the issue.

## OrderBy
Using the orderby operator with multiple properties does not work, due to a breaking change between OData version 3 and OData version 4.
OData 4 requires a comma between properties, while OData 3 supported space.
```curl
# invalid
Reporting/CustomerLedger?fromDate=1970-01-01&toDate=2026-04-13&top=100&skip=0&orderby=MatchId asc PostingDate desc

# valid
Reporting/CustomerLedger?fromDate=1970-01-01&toDate=2026-04-13&top=100&skip=0&orderby=MatchId asc, PostingDate desc
```

### Temporary mitigation
Refer to OData 4 standard.

We are working on a fix mitigate the breaking changes, so you as a developer do not have to edit your code.
