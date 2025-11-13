
GET GeneralLedgerAccount/?options=&lt;options&gt;
================

Gets a list of [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/GeneralLedgerAccount/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[GeneralLedgerAccount](Type_GeneralLedgerAccount.md)|The odata query options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;|No|DataPage&lt;GeneralLedgerAccount&gt;.

### Request Signature
```http
GET /GeneralLedgerAccount/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "code": number,
        "agricultureDepartment": AgricultureDepartment,
        "name": string,
        "vatCode": string,
        "vatReturnSpecification": VatReturnSpecification,
        "isVatCodeLockedAfterPosting": boolean,
        "departmentCode": string,
        "isDepartmentRequired": boolean,
        "projectCode": string,
        "isProjectRequired": boolean,
        "isEnterpriseRequired": boolean,
        "isFixedAssetsRequired": boolean,
        "isQuantityRequired": boolean,
        "isQuantity2Required": boolean,
        "isProductRequired": boolean,
        "isAgricultureProductRequired": boolean,
        "isActivityRequired": boolean,
        "isLocationRequired": boolean,
        "isDim1Required": boolean,
        "isDim2Required": boolean,
        "isDim3Required": boolean,
        "currencyCode": string,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid),
        "unit1": UnitOfMeasureCode,
        "unit2": UnitOfMeasureCode
    }],
    "count": number,
    "success": boolean
}

```



