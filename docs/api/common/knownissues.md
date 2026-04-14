# Known Issues

## Endpoint access may be denied when the client lacks a required PowerOffice Go subscription

Some API endpoints require both the correct integration privileges and an active subscription to the related PowerOffice Go module. For example, TimeTracking endpoints require that the client has a valid Time subscription. If the subscription requirement is not met, the request may fail with `403 Forbidden` even when the integration appears to have the necessary endpoint privileges.

This can happen because the access token now includes subscription-based validation data. A client can therefore receive an access token where some privileges are marked as invalid for that specific client. In practice, this means the integration is authenticated successfully, but access to certain endpoints is still blocked.

If you encounter this issue, decode the JWT access token and check whether the `goInvalidPrivileges` field contains the endpoint privilege you are trying to use. You should also verify that the client has an active subscription for the required module in PowerOffice Go.

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
