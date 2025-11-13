
POST DebtCollection/AddInvoicesToCase/
================

Adds a collection of invoices to a debt collection case by the debt collection case assigned id and the invoices ids.

### Url
```http
https://api.poweroffice.net/DebtCollection/AddInvoicesToCase/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionAddInvoicesToCaseRequest](Type_DebtCollectionAddInvoicesToCaseRequest.md)|No|The debt collection add invoices to case request.

### Response Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionCase](Type_DebtCollectionCase.md)|No|DebtCollectionCase

### Request Signature
```http
POST /DebtCollection/AddInvoicesToCase/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": string (Guid),
        "code": string,
        "status": DebtCollectionCaseStatus,
        "invoices": [{
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
        "externalCaseUrl": string,
        "balanceAgency": number,
        "lastChanged": Date,
        "invoiceLastChanged": Date
    },
    "success": boolean
}

```



