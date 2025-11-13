
POST JournalEntryVoucher/ForwardIncomingEhf/
================

Insert EHF invoice into Go. Puts a CreateEhfImageMessage on the queue to the standard worker.

### Url
```http
https://api.poweroffice.net/JournalEntryVoucher/ForwardIncomingEhf/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[IncomingEhfFile](Type_IncomingEhfFile.md)|No|The object containing the EHF file as base64 encoded string and file name.

### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Bool

### Request Signature
```http
POST /JournalEntryVoucher/ForwardIncomingEhf/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "originalFileName": string,
    "base64EncodedData": string
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



