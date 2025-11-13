
GET InvoiceAttachment/?options=&lt;options&gt;
================

Gets a list of [InvoiceAttachment](Type_InvoiceAttachment.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/InvoiceAttachment/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[InvoiceAttachment](Type_InvoiceAttachment.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Invoices.InvoiceAttachment&gt;|No|DataPage&lt;InvoiceAttachment&gt;.

### Request Signature
```http
GET /InvoiceAttachment/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "invoiceId": string (Guid),
        "base64EncodedData": string,
        "fileName": string,
        "fileSizeInBytes": number,
        "lastChanged": Date
    }],
    "count": number,
    "success": boolean
}

```



