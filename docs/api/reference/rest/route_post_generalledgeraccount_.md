
POST GeneralLedgerAccount/
================

Creates or updates the specified [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) .

### Url
```http
https://api.poweroffice.net/GeneralLedgerAccount/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[GeneralLedgerAccount](Type_GeneralLedgerAccount.md)|No|The general ledger account.

### Response Content
Type | Array | Description
:----|:------|:------------
[GeneralLedgerAccount](Type_GeneralLedgerAccount.md)|No|GeneralLedgerAccount.

### Request Signature
```http
POST /GeneralLedgerAccount/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
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
    "unit1": UnitOfMeasureCode,
    "unit2": UnitOfMeasureCode
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



