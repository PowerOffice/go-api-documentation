
POST Voucher/VoucherDocumentation/
================

Adds [VoucherDocumentation](Type_VoucherDocumentation.md) to an imported Voucher.

### Url
```http
https://api.poweroffice.net/Voucher/VoucherDocumentation/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[VoucherDocumentation](Type_VoucherDocumentation.md)|No|The Voucher documentation

### Response Content
Type | Array | Description
:----|:------|:------------
[VoucherDocumentation](Type_VoucherDocumentation.md)|No|

### Request Signature
```http
POST /Voucher/VoucherDocumentation/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "voucherId": string (Guid),
    "base64EncodedData": string,
    "fileName": string,
    "fileType": DocumentationFileType
}

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



