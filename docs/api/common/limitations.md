Limitations
==============

## Maximum number of requests per second

We have a limit of 50 requests per second for each integration key. 

If you reach the limit the HTTP request will be answered with the HTTP response code `429 Too Many Requests`.

Best practice to handle this is to wait at least one second and then retry your request.

The C# Nuget-package will handle this automatically, but if you're using the REST-API directly, you must
handle this error yourself.


## Max page size limit

A max page size limit is enforced on endpoints that return a list of items/rows.

When the max page limit is reached an error response is given (success = false).

It's recommended to always limit the amount of data that is extracted to avoid reaching the max page size limit.

See recommended usage for more info: [Recommended Usage](Common/RecommendedUsage.md)

Max **50.000** items/rows:
- GET Reporting/AccountTransactions
- GET TimeTracking/TimeTrackingEntry
- GET Customer
- GET Employee
- GET Supplier
- GET Product
- GET Project

Max **20.000** items/rows:
- GET Reporting/CustomerLedger
- GET Reporting/SupplierLedger

Max **10.000** items/rows:
- GET OutgoingInvoice/List

Max **5.000** items/rows:
- GET Reporting/InvoiceJournal


## Live data

All GET requests are performed towards a replicated database on our side. Meaning there is a small synchronization
delay between storing and retrieving data. Typically this delay is below 1 second. To ensure that you retrieve
the most up-to-date data when synchronizing with GO, we recommend waiting 1-2 seconds after a POST/DELETE has
been performed on a dataset before calling a subsequent GET request on the same data.

When requesting the latest data, we recommend filtering on LastChanged. This property indicates the date and time
when the entity/object was last changed in the database. If you keep track of the last time you did a request
for getting the latest data, and ensure that the current request is filtering LastChanged later than that time, 
you will retrieve only data that has been updated since the last time you did the same request.

## Access to endpoints

## Validation on endpoint access

### Client does not have a valid PowerOffice Go subscription

Some endpoints require the client to have access to a specific PowerOffice Go module. For example, the `TimeTracking` endpoints require a valid subscription to the `Time` module.
If the client does not have the required subscription, the API returns `403 Forbidden`, even if the integration itself has the necessary privileges.
You can verify this by decoding the access token in a JWT tool. The `goInvalidPrivileges` property will show which privileges are unavailable for the client.

Example JWT token content:

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