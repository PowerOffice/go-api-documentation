
POST RecurringInvoice/SaveNote/
================

Saves a new [VoucherNote](Type_VoucherNote.md) or updates an existing note on an [RecurringInvoice](Type_RecurringInvoice.md) .         Note that all with access to invoices can access the notes.

### Url
```http
https://api.poweroffice.net/RecurringInvoice/SaveNote/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[VoucherNote](Type_VoucherNote.md)|No|The data object.

### Response Content
Type | Array | Description
:----|:------|:------------
[VoucherNote](Type_VoucherNote.md)|No|VoucherNote.

### Request Signature
```http
POST /RecurringInvoice/SaveNote/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "voucherId": string (Guid),
    "text": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "voucherId": string (Guid),
        "text": string,
        "createdDate": Date,
        "lastChangedDate": Date,
        "createdByUserId": string (Guid),
        "lastChangedByUserId": string (Guid)
    },
    "success": boolean
}

```



