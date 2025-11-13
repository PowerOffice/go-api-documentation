
GET Blob/GetVoucherDocumentationList/{voucherNo}/
================

Get list with all documents on voucher.     (returns empty list if no documents are found on voucher)

### Url
```http
https://api.poweroffice.net/Blob/GetVoucherDocumentationList/{voucherNo}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
List&lt;GoApi.Common.VoucherDocument&gt;|No|List of VoucherDocument

### Request Signature
```http
GET /Blob/GetVoucherDocumentationList/{voucherNo}/ HTTP/1.1
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



