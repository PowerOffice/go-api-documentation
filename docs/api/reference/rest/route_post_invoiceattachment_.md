
POST InvoiceAttachment/
================

Adds an [InvoiceAttachment](Type_InvoiceAttachment.md) to a invoice.

### Url
```http
https://api.poweroffice.net/InvoiceAttachment/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[InvoiceAttachment](Type_InvoiceAttachment.md)|No|The invoice attachment.

### Response Content
Type | Array | Description
:----|:------|:------------
[InvoiceAttachment](Type_InvoiceAttachment.md)|No|InvoiceAttachment.

### Request Signature
```http
POST /InvoiceAttachment/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": number,
    "invoiceId": string (Guid),
    "base64EncodedData": string,
    "fileName": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "invoiceId": string (Guid),
        "base64EncodedData": string,
        "fileName": string,
        "fileSizeInBytes": number,
        "lastChanged": Date
    },
    "success": boolean
}

```



