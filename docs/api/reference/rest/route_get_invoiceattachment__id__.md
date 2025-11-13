
GET InvoiceAttachment/{id}/
================

Gets the specified [InvoiceAttachment](Type_InvoiceAttachment.md) by its identifier.

### Url
```http
https://api.poweroffice.net/InvoiceAttachment/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[InvoiceAttachment](Type_InvoiceAttachment.md)|No|InvoiceAttachment.

### Request Signature
```http
GET /InvoiceAttachment/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



