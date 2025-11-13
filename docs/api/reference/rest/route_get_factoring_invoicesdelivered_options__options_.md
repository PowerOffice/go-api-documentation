
GET Factoring/InvoicesDelivered?options=&lt;options&gt;
================

Gets a list of invoices delivered by the factoring integration filtered by a oData query.

### Url
```http
https://api.poweroffice.net/Factoring/InvoicesDelivered?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[FactoringInvoiceDetails](Type_FactoringInvoiceDetails.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Factoring.FactoringInvoiceDetails&gt;|No|DataPage&lt;FactoringInvoiceDetails&gt;.

### Request Signature
```http
GET /Factoring/InvoicesDelivered?options=<options> HTTP/1.1
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
    }],
    "count": number,
    "success": boolean
}

```



