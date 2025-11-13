
GET ExternallyDeliverableInvoice/?options=&lt;options&gt;
================

Gets all [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) filtered by an odata query.

### Url
```http
https://api.poweroffice.net/ExternallyDeliverableInvoice/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md)|


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Invoices.ExternallyDeliverableInvoice&gt;|No|Datapage&lt;ExternallyDeliverableInvoice&gt;.

### Request Signature
```http
GET /ExternallyDeliverableInvoice/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "customerCode": number,
        "customerEmail": string,
        "externalInvoiceDeliveryType": ExternalInvoiceDeliveryType,
        "totalAmount": number,
        "invoiceNo": number,
        "invoiceDeliveryDate": Date,
        "invoiceDate": Date,
        "dueDate": Date,
        "createdDate": Date,
        "isDelivered": boolean
    }],
    "count": number,
    "success": boolean
}

```



