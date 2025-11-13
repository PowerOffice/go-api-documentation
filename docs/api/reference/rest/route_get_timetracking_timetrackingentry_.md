
GET TimeTracking/TimeTrackingEntry/
================

Gets a list of [TimeTrackingEntry](Type_TimeTrackingEntry.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/TimeTracking/TimeTrackingEntry/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.TimeTracking.TimeTrackingEntry&gt;|No|DataPage&lt;TimeTrackingEntry&gt;.

### Request Signature
```http
GET /TimeTracking/TimeTrackingEntry/?$filter=<ODataFilter> HTTP/1.1
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
        "externalImportReference": string
    }],
    "count": number,
    "success": boolean
}

```



