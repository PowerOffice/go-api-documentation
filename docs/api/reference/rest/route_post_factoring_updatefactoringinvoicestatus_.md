
POST Factoring/updatefactoringinvoicestatus/
================

Updates the factoring status on the invoice with a specified [FactoringInvoiceStatus](Type_FactoringInvoiceStatus.md) .     Cannot be called before the invoice is delivered through the Go.Web.ExternalApi.Controllers.FactoringController.Delivered(GoApi.Factoring.FactoringInvoiceDetailsDeliveredRequest) request.

### Url
```http
https://api.poweroffice.net/Factoring/updatefactoringinvoicestatus/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[FactoringInvoiceStatusRequest](Type_FactoringInvoiceStatusRequest.md)|No|The request.

### Response Content
Type | Array | Description
:----|:------|:------------
[FactoringInvoiceDetails](Type_FactoringInvoiceDetails.md)|No|FactoringInvoiceDetails.

### Request Signature
```http
POST /Factoring/updatefactoringinvoicestatus/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "factoringInvoiceId": string (Guid),
    "factoringInvoiceStatus": FactoringInvoiceStatus,
    "factoringInvoiceStatusDescription": string
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



