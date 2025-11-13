
GET Employee/?options=&lt;options&gt;
================

Gets a list of parties ( [Customer](Type_Customer.md) / [Supplier](Type_Supplier.md) / [Employee](Type_Employee.md) ) filtered by the odata query

### Url
```http
https://api.poweroffice.net/Employee/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Employee](Type_Employee.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Party.Employee&gt;|No|DataPage&lt;Party&gt;.

### Request Signature
```http
GET /Employee/?options=<options> HTTP/1.1
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



