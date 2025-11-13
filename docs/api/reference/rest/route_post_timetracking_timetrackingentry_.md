
POST TimeTracking/TimeTrackingEntry/
================

Creates or updates the specified [TimeTrackingEntry](Type_TimeTrackingEntry.md) .

### Url
```http
https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[TimeTrackingEntry](Type_TimeTrackingEntry.md)|No|The time tracking entry.

### Response Content
Type | Array | Description
:----|:------|:------------
[TimeTrackingEntry](Type_TimeTrackingEntry.md)|No|TimeTrackingEntry.

### Request Signature
```http
POST /TimeTracking/TimeTrackingEntry/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "activityCode": string,
    "projectCode": string,
    "departmentCode": string,
    "employeeCode": number,
    "customerCode": number,
    "hourType": string,
    "date": Date,
    "comment": string,
    "internalComment": string,
    "excludedFromPayroll": boolean,
    "outgoingInvoiceLineId": number,
    "isInvoiced": boolean,
    "hourlyRate": number,
    "hourlyCost": number,
    "minutes": number,
    "billableHours": number,
    "fromTime": TimeSpan,
    "toTime": TimeSpan,
    "externalImportReference": string,
    "breakTime": number
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "activityCode": string,
        "projectCode": string,
        "departmentCode": string,
        "employeeCode": number,
        "customerCode": number,
        "hourType": string,
        "date": Date,
        "isLocked": boolean,
        "comment": string,
        "internalComment": string,
        "lastChanged": Date,
        "excludedFromPayroll": boolean,
        "outgoingInvoiceLineId": number,
        "isTransferedToPayroll": boolean,
        "isInvoiced": boolean,
        "hourlyRate": number,
        "hourlyCost": number,
        "minutes": number,
        "billableHours": number,
        "fromTime": TimeSpan,
        "toTime": TimeSpan,
        "billableAmount": number,
        "externalImportReference": string,
        "breakTime": number
    },
    "success": boolean
}

```



