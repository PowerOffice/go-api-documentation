
GET DebtCollection/Invoices/AvailableInvoices?options=&lt;options&gt;
================

Gets the all the available invoices for debt collection filtered by a oData query.

### Url
```http
https://api.poweroffice.net/DebtCollection/Invoices/AvailableInvoices?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[DebtCollectionInvoice](Type_DebtCollectionInvoice.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.DebtCollection.DebtCollectionInvoice&gt;|No|DataPage&lt;DebtCollectionInvoice&gt;.

### Request Signature
```http
GET /DebtCollection/Invoices/AvailableInvoices?options=<options> HTTP/1.1
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
        "invoiceDate": Date,
        "invoiceNo": number,
        "dueDate": Date,
        "originalAmount": number,
        "remainingAmount": number,
        "currencyCode": string,
        "cID": string,
        "lastChanged": Date,
        "lastReminderSentDate": Date,
        "lastReminderDueDate": Date,
        "lastReminderVoucherType": VoucherType,
        "lastReminderEmailAddress": string,
        "invoiceEmailAddress": string,
        "externalImportReference": string,
        "originalPostedAmount": number
    }],
    "count": number,
    "success": boolean
}

```



