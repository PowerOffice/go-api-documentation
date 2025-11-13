
GET Blob/GetVoucherDocumentation/{voucherNo}/
================

Gets the voucher document.

### Url
```http
https://api.poweroffice.net/Blob/GetVoucherDocumentation/{voucherNo}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[VoucherDocument](Type_VoucherDocument.md)|No|VoucherDocument

### Request Signature
```http
GET /Blob/GetVoucherDocumentation/{voucherNo}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "voucherNo": number,
        "base64EncodedData": string,
        "fileName": string,
        "fileType": DocumentMimeType
    },
    "success": boolean
}

```



