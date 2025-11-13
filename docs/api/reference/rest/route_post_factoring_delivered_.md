
POST Factoring/delivered/
================

Adds an history entry on the [FactoringInvoiceDetails](Type_FactoringInvoiceDetails.md) that an invoice has been delivered with an optional file and comment.      Calling this will set GoApi.Factoring.FactoringInvoiceDetails.IsDelivered to true.     Can only be called on invoices with GoApi.Factoring.FactoringInvoiceStatus.Active .

### Url
```http
https://api.poweroffice.net/Factoring/delivered/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[FactoringInvoiceDetailsDeliveredRequest](Type_FactoringInvoiceDetailsDeliveredRequest.md)|No|The request.

### Response Content
Type | Array | Description
:----|:------|:------------
[FactoringInvoiceDetails](Type_FactoringInvoiceDetails.md)|No|ExternallyDeliverableInvoice.

### Request Signature
```http
POST /Factoring/delivered/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "factoringInvoiceId": string (Guid),
    "invoiceCid": string,
    "file": {
        "base64EncodedData": string,
        "fileName": string
    },
    "comment": string
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
        "totalAmount": number,
        "invoiceNo": number,
        "invoiceDeliveryDate": Date,
        "invoiceDate": Date,
        "dueDate": Date,
        "createdDate": Date,
        "isDelivered": boolean,
        "originalInvoiceNo": number,
        "factoringInvoiceStatus": FactoringInvoiceStatus,
        "factoringInvoiceStatusDescription": string,
        "debtorEmailAddress": string,
        "debtorPhoneNumber": string,
        "projectCode": string,
        "projectName": string,
        "departmentCode": string,
        "departmentName": string
    },
    "success": boolean
}

```



