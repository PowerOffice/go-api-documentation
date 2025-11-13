
PUT Reporting/InvoiceJournal/SetExternalCaseNumber/{id}/
================

Sets the external case number.     This method is now obsolete, since we now have a specific service for debt collection ( DebtCollectionController ).

### Url
```http
https://api.poweroffice.net/Reporting/InvoiceJournal/SetExternalCaseNumber/{id}/
```

### Http Verb

PUT


### Request Content
Type | Array | Description
:----|:------|:------------
string|No|The external case number.

### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```http
PUT /Reporting/InvoiceJournal/SetExternalCaseNumber/{id}/ HTTP/1.1
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



