
GET TimeTracking/Activity/{id}/
================

Gets the specified [Activity](Type_Activity.md) by its identifier.

### Url
```http
https://api.poweroffice.net/TimeTracking/Activity/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[Activity](Type_Activity.md)|No|Activity.

### Request Signature
```http
GET /TimeTracking/Activity/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



