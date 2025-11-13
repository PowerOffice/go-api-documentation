
GET Blob/VoucherEhf/{voucherNo}/
================

Get the ehf xml document for a supplier invoice as a Stream.

### Url
```http
https://api.poweroffice.net/Blob/VoucherEhf/{voucherNo}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
HttpResponseMessage|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```http
GET /Blob/VoucherEhf/{voucherNo}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: <content type>

<body data>
```



