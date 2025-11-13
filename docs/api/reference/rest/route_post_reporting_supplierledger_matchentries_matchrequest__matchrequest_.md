
POST Reporting/SupplierLedger/MatchEntries?matchRequest=&lt;matchRequest&gt;
================

Matches the entries.

### Url
```
https://api.poweroffice.net/Reporting/SupplierLedger/MatchEntries?matchRequest=<matchRequest>
```

### Http Verb

POST

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
matchRequest|[MatchRequest](Type_MatchRequest.md)|Yes|The match request.


### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|One.Common.Api.Success.

### Request Signature
```
POST /Reporting/SupplierLedger/MatchEntries?matchRequest=<matchRequest> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```
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
            "batchItemErrors": IBatchItemError[
        },
        "count": number
    },
    "success": boolean
}

```



