
GET DebtCollection/?options=&lt;options&gt;
================

Gets a list of debt collection cases filtered by a oData query.

### Url
```http
https://api.poweroffice.net/DebtCollection/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[DebtCollectionCase](Type_DebtCollectionCase.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.DebtCollection.DebtCollectionCase&gt;|No|DataPage&lt;DebtCollectionCase&gt;.

### Request Signature
```http
GET /DebtCollection/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



