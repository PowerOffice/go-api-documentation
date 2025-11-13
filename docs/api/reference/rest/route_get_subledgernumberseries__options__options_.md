
GET SubledgerNumberSeries/?options=&lt;options&gt;
================

Gets a list of sub ledger number series filtered by odata query.

### Url
```http
https://api.poweroffice.net/SubledgerNumberSeries/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[SubledgerNumberSeries](Type_SubledgerNumberSeries.md)|The odata options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.AccountingSettings.SubledgerNumberSeries&gt;|No|DataPage&lt;SubledgerNumberSeries&gt;.

### Request Signature
```http
GET /SubledgerNumberSeries/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "type": SubledgerNumberSeriesType,
        "fromInclusive": number,
        "toInclusive": number,
        "generalLedgerAccountCode": number,
        "generalLedgerAccountAgricultureDepartment": AgricultureDepartment,
        "name": string,
        "isClientTrust": boolean,
        "isDefault": boolean
    }],
    "count": number,
    "success": boolean
}

```



