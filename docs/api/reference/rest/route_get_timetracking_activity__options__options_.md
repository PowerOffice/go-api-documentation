
GET TimeTracking/Activity/?options=&lt;options&gt;
================

Gets a list of [Activity](Type_Activity.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/TimeTracking/Activity/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Activity](Type_Activity.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.TimeTracking.Activity&gt;|No|DataPage&lt;Activity&gt;.

### Request Signature
```http
GET /TimeTracking/Activity/?options=<options> HTTP/1.1
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



