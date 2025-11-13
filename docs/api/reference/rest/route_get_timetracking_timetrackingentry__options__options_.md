
GET TimeTracking/TimeTrackingEntry/?options=&lt;options&gt;
================

Gets a list of [TimeTrackingEntry](Type_TimeTrackingEntry.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[TimeTrackingEntry](Type_TimeTrackingEntry.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.TimeTracking.TimeTrackingEntry&gt;|No|DataPage&lt;TimeTrackingEntry&gt;.

### Request Signature
```http
GET /TimeTracking/TimeTrackingEntry/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



