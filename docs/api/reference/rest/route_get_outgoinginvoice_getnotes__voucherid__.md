
GET OutgoingInvoice/GetNotes/{voucherId}/
================

Gets all [VoucherNote](Type_VoucherNote.md) connected to an [OutgoingInvoice](Type_OutgoingInvoice.md) by the Outgoing Invoices Id.

### Url
```http
https://api.poweroffice.net/OutgoingInvoice/GetNotes/{voucherId}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[VoucherNote[]](Type_VoucherNote.md)|No|VoucherNote[].

### Request Signature
```http
GET /OutgoingInvoice/GetNotes/{voucherId}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": VoucherNote[],
    "success": boolean
}

```



