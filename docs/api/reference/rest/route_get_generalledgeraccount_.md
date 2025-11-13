
GET GeneralLedgerAccount/
================

Gets a list of [GeneralLedgerAccount](Type_GeneralLedgerAccount.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/GeneralLedgerAccount/
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
DataPage&lt;GoApi.AccountingSettings.GeneralLedgerAccount&gt;|No|DataPage&lt;GeneralLedgerAccount&gt;.

### Request Signature
```http
GET /GeneralLedgerAccount/?$filter=<ODataFilter> HTTP/1.1
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
        "name": string,
        "vatCode": string,
        "vatReturnSpecification": VatReturnSpecification,
        "isVatCodeLockedAfterPosting": boolean,
        "departmentCode": string,
        "isDepartmentRequired": boolean,
        "projectCode": string,
        "isProjectRequired": boolean,
        "currencyCode": string,
        "isActive": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid)
    }],
    "count": number,
    "success": boolean
}

```



