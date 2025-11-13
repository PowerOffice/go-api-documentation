
POST Voucher/OutgoingInvoiceVoucher/Reverse/{voucherId}/
================

Reverses a previously sent voucher by its id.

### Url
```http
https://api.poweroffice.net/Voucher/OutgoingInvoiceVoucher/Reverse/{voucherId}/
```

### Http Verb

POST



### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|True if the voucher was successfully reversed.

### Request Signature
```http
POST /Voucher/OutgoingInvoiceVoucher/Reverse/{voucherId}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



