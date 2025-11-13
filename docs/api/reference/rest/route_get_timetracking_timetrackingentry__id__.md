
GET TimeTracking/TimeTrackingEntry/{id}/
================

Gets the specified [TimeTrackingEntry](Type_TimeTrackingEntry.md) by its identifier.

### Url
```http
https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[TimeTrackingEntry](Type_TimeTrackingEntry.md)|No|TimeTrackingEntry.

### Request Signature
```http
GET /TimeTracking/TimeTrackingEntry/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



