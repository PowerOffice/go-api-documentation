
POST Reporting/SupplierLedger/UnmatchEntries/
================

Unmatches the [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) provided in the match request by their ids.

### Url
```http
https://api.poweroffice.net/Reporting/SupplierLedger/UnmatchEntries/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[MatchRequest](Type_MatchRequest.md)|No|The match request.

### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|One.Common.Api.Success.

### Request Signature
```http
POST /Reporting/SupplierLedger/UnmatchEntries/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "data": object,
        "success": boolean,
        "validation": {
            "errorLogReference": string,
            "summary": string,
            "exception": string,
            "exceptionDetails": object,
            "fields": IDictionary,
            "batchItemErrors": IBatchItemError[]
        },
        "count": number
    },
    "success": boolean
}

```



