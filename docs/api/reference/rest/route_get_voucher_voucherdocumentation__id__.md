
GET Voucher/VoucherDocumentation/{id}/
================

Gets the imported [VoucherDocumentation](Type_VoucherDocumentation.md) by the Voucher's Id.

### Url
```http
https://api.poweroffice.net/Voucher/VoucherDocumentation/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[VoucherDocumentation](Type_VoucherDocumentation.md)|No|

### Request Signature
```http
GET /Voucher/VoucherDocumentation/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "voucherId": string (Guid),
        "base64EncodedData": string,
        "fileName": string,
        "fileType": DocumentationFileType
    },
    "success": boolean
}

```



