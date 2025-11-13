
POST Reporting/CustomerLedger/UnmatchEntries?matchRequest=&lt;matchRequest&gt;
================



### Url
```
http://api.poweroffice.net/Reporting/CustomerLedger/UnmatchEntries?matchRequest=<matchRequest>
```

### Http Verb

POST

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
matchRequest|[MatchRequest](Type_MatchRequest.md)|Yes|


### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|

### Request Signature
```
POST /Reporting/CustomerLedger/UnmatchEntries?matchRequest=<matchRequest> HTTP/1.1
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
            "fields": IDictionary,
            "batchItemErrors": IBatchItemError[][
        },
        "count": number
    },
    "success": boolean
}

```




