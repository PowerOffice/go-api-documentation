
POST OutgoingInvoice/SendInvoice/
================

Sends an invoice from Go to the specified customer through a given invoice delivery type.     The invoice will be added to the invoice sending queue if all provided parameters are valid. GoApi.Invoices.OutgoingInvoice.IsInvoiceBeingProcessed will be true while the invoice is in transit. After the invoice is delivered to the customer, the IsInvoiceBeingProcessed on the OutgoingInvoice will be set to false.     Note that it's not guaranteed that the invoice will be sent although this function returns successfully. The invoice will be processed asynchronously. If any errors occur during processing, these errors will be displayed in GoApi.Invoices.OutgoingInvoice.LastErrorMessage .     Check GoApi.Invoices.OutgoingInvoice.Status to ensure that the invoice has actually been sent.

### Url
```http
https://api.poweroffice.net/OutgoingInvoice/SendInvoice/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[SendInvoiceRequest](Type_SendInvoiceRequest.md)|No|Contains parameters used for sending invoice.

### Response Content
Type | Array | Description
:----|:------|:------------
Success|No|Success where true if the invoice successfully added to the sending queue.

### Request Signature
```http
POST /OutgoingInvoice/SendInvoice/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "invoiceId": string (Guid),
    "invoiceDate": Date,
    "deliveryType": SendInvoiceDeliveryType,
    "email": string,
    "sendByEhfIfPossible": boolean,
    "sendByEfakturaIfPossible": boolean,
    "sendByAvtaleGiroIfPossible": boolean
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "data": object,
        "success": boolean,
        "validation": {
            "errorLogReference": string,
            "summary": string,
            "exception": string,
            "exceptionDetails": object,
            "fields": IDictionary,
            "batchItemErrors": IBatchItemError[]
        },
        "count": number
    },
    "success": boolean
}

```



