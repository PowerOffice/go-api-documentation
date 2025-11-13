
POST ExternallyDeliverableInvoice/delivered/
================

Adds an history entry on the [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) that an invoice has been delivered with an optional file and comment.      Calling this will set GoApi.Invoices.ExternallyDeliverableInvoice.IsDelivered to true.

### Url
```http
https://api.poweroffice.net/ExternallyDeliverableInvoice/delivered/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[ExternallyDeliverableInvoiceDeliveredRequest](Type_ExternallyDeliverableInvoiceDeliveredRequest.md)|No|The request.

### Response Content
Type | Array | Description
:----|:------|:------------
[ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md)|No|ExternallyDeliverableInvoice.

### Request Signature
```http
POST /ExternallyDeliverableInvoice/delivered/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "externallyDeliverableInvoiceId": string (Guid),
    "file": {
        "base64EncodedData": string,
        "fileName": string
    },
    "comment": string,
    "exemptDebtCollection": boolean
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



