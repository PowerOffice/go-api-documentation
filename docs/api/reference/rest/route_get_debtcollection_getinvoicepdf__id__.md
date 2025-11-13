
GET DebtCollection/GetInvoicePdf/{id}/
================

Gets the PDF for an invoice by a given id.

### Url
```http
https://api.poweroffice.net/DebtCollection/GetInvoicePdf/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
HttpResponseMessage|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```http
GET /DebtCollection/GetInvoicePdf/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: <content type>

<body data>
```



