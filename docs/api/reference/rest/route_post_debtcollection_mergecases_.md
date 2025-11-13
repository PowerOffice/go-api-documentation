
POST DebtCollection/MergeCases/
================

Merges a collection of debt collection cases by their ids to a single debt collection case with a given code.

### Url
```http
https://api.poweroffice.net/DebtCollection/MergeCases/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionMergeCasesRequest](Type_DebtCollectionMergeCasesRequest.md)|No|The merge debt collection cases request

### Response Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionCase](Type_DebtCollectionCase.md)|No|DebtCollectionCase

### Request Signature
```http
POST /DebtCollection/MergeCases/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "externalCaseUrl": string
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



