
GET Blob/VoucherImage/{voucherNo}/{pageNo}/
================

Get the image of a single page on a voucher as jpeg stream.

### Url
```http
https://api.poweroffice.net/Blob/VoucherImage/{voucherNo}/{pageNo}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
HttpResponseMessage|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```http
GET /Blob/VoucherImage/{voucherNo}/{pageNo}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: <content type>

<body data>
```



