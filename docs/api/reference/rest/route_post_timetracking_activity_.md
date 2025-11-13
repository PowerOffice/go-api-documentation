
POST TimeTracking/Activity/
================

Creates or updates the specified [Activity](Type_Activity.md) .

### Url
```http
https://api.poweroffice.net/TimeTracking/Activity/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Activity](Type_Activity.md)|No|The Activity.

### Response Content
Type | Array | Description
:----|:------|:------------
[Activity](Type_Activity.md)|No|Activity.

### Request Signature
```http
POST /TimeTracking/Activity/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "activityType": ActivityType,
    "code": string,
    "name": string,
    "hourlyRate": number,
    "productCode": string,
    "isActive": boolean,
    "hourType": string,
    "isLockedHourType": boolean,
    "useEmployeeDefaultHourType": boolean,
    "useRegularHoursHourType": boolean,
    "requireProject": boolean,
    "requireExternalComment": boolean
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



