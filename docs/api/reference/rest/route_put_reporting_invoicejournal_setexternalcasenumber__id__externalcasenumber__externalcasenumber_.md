
PUT Reporting/InvoiceJournal/SetExternalCaseNumber/{id}?externalCaseNumber=&lt;externalCaseNumber&gt;
================

Sets the external case number.

### Url
```
https://api.poweroffice.net/Reporting/InvoiceJournal/SetExternalCaseNumber/{id}?externalCaseNumber=<externalCaseNumber>
```

### Http Verb

PUT

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
externalCaseNumber|string|Yes|The external case number.


### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```
PUT /Reporting/InvoiceJournal/SetExternalCaseNumber/{id}?externalCaseNumber=<externalCaseNumber> HTTP/1.1
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



