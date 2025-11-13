
GET Reporting/InvoiceJournal/GetPdf/{id}?cancellationToken=&lt;cancellationToken&gt;
================

Gets the PDF for an invoice by a given id.

### Url
```
http://api.poweroffice.net/Reporting/InvoiceJournal/GetPdf/{id}?cancellationToken=<cancellationToken>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
cancellationToken|CancellationToken|Yes|


### Response Content
Type | Array | Description
:----|:------|:------------
HttpResponseMessage|No|System.Threading.Tasks.Task&lt;System.Net.Http.HttpResponseMessage&gt;.

### Request Signature
```
GET /Reporting/InvoiceJournal/GetPdf/{id}?cancellationToken=<cancellationToken> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: <content type>

<body data>
```



