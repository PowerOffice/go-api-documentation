
POST DebtCollection/UpdateStatus/
================

Updates a debt collection case status by it's id and a status text.      The request will by default set the status of a debt collection case to Active, but can also close or reject cases by setting flags on the request.

### Url
```http
https://api.poweroffice.net/DebtCollection/UpdateStatus/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionStatusUpdateRequest](Type_DebtCollectionStatusUpdateRequest.md)|No|The debt collection status update request.

### Response Content
Type | Array | Description
:----|:------|:------------
[DebtCollectionCase](Type_DebtCollectionCase.md)|No|DebtCollectionCase.

### Request Signature
```http
POST /DebtCollection/UpdateStatus/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "caseId": string (Guid),
    "statusText": string,
    "isCaseClosed": boolean,
    "updatedBalanceAgency": number
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



