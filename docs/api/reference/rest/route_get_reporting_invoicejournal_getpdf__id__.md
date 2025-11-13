
GET Reporting/InvoiceJournal/GetPdf/{id}/
================

Gets the PDF for an invoice or credit note with a id.

### Url
```http
https://api.poweroffice.net/Reporting/InvoiceJournal/GetPdf/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
HttpResponseMessage|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```http
GET /Reporting/InvoiceJournal/GetPdf/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: <content type>

<body data>
```



