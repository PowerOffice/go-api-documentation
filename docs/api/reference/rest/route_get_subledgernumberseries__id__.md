
GET SubledgerNumberSeries/{id}/
================

Gets the specified sub ledger number series by its identifier.

### Url
```http
https://api.poweroffice.net/SubledgerNumberSeries/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[SubledgerNumberSeries](Type_SubledgerNumberSeries.md)|No|SubledgerNumberSeries.

### Request Signature
```http
GET /SubledgerNumberSeries/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": string (Guid),
        "type": SubledgerNumberSeriesType,
        "fromInclusive": number,
        "toInclusive": number,
        "generalLedgerAccountCode": number,
        "generalLedgerAccountAgricultureDepartment": AgricultureDepartment,
        "name": string,
        "isClientTrust": boolean,
        "isDefault": boolean
    },
    "success": boolean
}

```



