
GET TimeTracking/Activity/
================

Gets a list of [Activity](Type_Activity.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/TimeTracking/Activity/
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
DataPage&lt;GoApi.TimeTracking.Activity&gt;|No|DataPage&lt;Activity&gt;.

### Request Signature
```http
GET /TimeTracking/Activity/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "activityType": ActivityType,
        "code": string,
        "name": string,
        "hourlyRate": number,
        "productCode": string,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid),
        "hourType": string,
        "isLockedHourType": boolean,
        "useEmployeeDefaultHourType": boolean,
        "useRegularHoursHourType": boolean,
        "requireProject": boolean,
        "requireExternalComment": boolean
    }],
    "count": number,
    "success": boolean
}

```



