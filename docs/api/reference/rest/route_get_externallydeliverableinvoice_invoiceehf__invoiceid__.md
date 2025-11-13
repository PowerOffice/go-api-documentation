
GET ExternallyDeliverableInvoice/InvoiceEhf/{invoiceId}/
================

Get the ehf xml document for a [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) invoice by its Id as Stream.

### Url
```http
https://api.poweroffice.net/ExternallyDeliverableInvoice/InvoiceEhf/{invoiceId}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
HttpResponseMessage|No|A Stream containing the xml data.

### Request Signature
```http
GET /ExternallyDeliverableInvoice/InvoiceEhf/{invoiceId}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: <content type>

<body data>
```



