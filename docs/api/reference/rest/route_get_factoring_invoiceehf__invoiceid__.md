
GET Factoring/InvoiceEhf/{invoiceId}/
================

Gets an EHF document for the invoice with the provided invoice id.

### Url
```http
https://api.poweroffice.net/Factoring/InvoiceEhf/{invoiceId}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
HttpResponseMessage|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```http
GET /Factoring/InvoiceEhf/{invoiceId}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: <content type>

<body data>
```



