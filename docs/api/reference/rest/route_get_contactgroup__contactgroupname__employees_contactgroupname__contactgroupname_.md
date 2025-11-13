
GET ContactGroup/{contactGroupName}/employees?contactGroupName=&lt;contactGroupName&gt;
================

Gets a list of [Employee](Type_Employee.md) that is connected to the contact group with given name.

### Url
```http
https://api.poweroffice.net/ContactGroup/{contactGroupName}/employees?contactGroupName=<contactGroupName>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
contactGroupName|string|The contact group name title.
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.Employee&gt;|No|DataPage&lt;Employee&gt;.

### Request Signature
```http
GET /ContactGroup/{contactGroupName}/employees?contactGroupName=<contactGroupName>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "nationalityCountryCode": string,
        "jobTitle": string,
        "hiredDate": Date,
        "startDate": Date,
        "endDate": Date,
        "departmentCode": string,
        "locationCode": string,
        "hourlyRates": [{
            "id": number,
            "validFrom": Date,
            "validTo": Date,
            "hourlyRate": number,
            "hourlyCost": number,
            "isDeleted": boolean
        }],
        "payrollBankAccountCode": string,
        "expenseBankAccountCode": string,
        "payrollEmailAddress": string,
        "employeeCreatedDate": Date,
        "managerEmployeeCode": number,
        "gender": Gender,
        "id": number,
        "code": number,
        "externalCode": number,
        "mailAddress": {
            "city": string,
            "zipCode": string,
            "address1": string,
            "address2": string,
            "countryCode": string,
            "lastChanged": Date,
            "id": number,
            "isPrimary": boolean,
            "externalCode": string
        },
        "streetAddresses": [{
            "city": string,
            "zipCode": string,
            "address1": string,
            "address2": string,
            "countryCode": string,
            "lastChanged": Date,
            "id": number,
            "isPrimary": boolean,
            "externalCode": string
        }],
        "emailAddress": string,
        "phoneNumber": string,
        "isArchived": boolean,
        "lastChanged": Date,
        "createdDate": Date,
        "contactGroups": string,
        "createdFromImportJournalId": string (Guid),
        "firstName": string,
        "lastName": string,
        "dateOfBirth": Date,
        "socialSecurityNumber": string,
        "subledgerNumberSeriesId": string (Guid),
        "reportInternationalId": boolean,
        "internationalIdCountryCode": string,
        "internationalIdType": InternationalIdType,
        "internationalIdNumber": string,
        "externalImportReference": string
    }],
    "count": number,
    "success": boolean
}

```



