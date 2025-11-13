
GET JournalEntryVoucher/?options=&lt;options&gt;
================

Gets a list of [JournalEntryVoucher](Type_JournalEntryVoucher.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/JournalEntryVoucher/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[JournalEntryVoucher](Type_JournalEntryVoucher.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.JournalEntry.JournalEntryVoucher&gt;|No|DataPage&lt;JournalEntryVoucher&gt;.

### Request Signature
```http
GET /JournalEntryVoucher/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "voucherType": JournalEntryVoucherType,
        "file": {
            "base64EncodedData": string,
            "fileName": string,
            "fileType": JournalEntryFileType
        },
        "supplierCode": number,
        "invoiceNo": string,
        "creditNoteNo": string,
        "voucherDate": Date,
        "dueDate": Date,
        "totalAmount": number,
        "currencyCode": string,
        "currencyRate": number,
        "employeeCode": number,
        "description": string,
        "cID": string,
        "voucherLines": [{
            "id": number,
            "debitAccountCode": number,
            "debitVatCode": string,
            "debitVatReturnSpecification": VatReturnSpecification,
            "creditAccountCode": number,
            "creditVatCode": string,
            "creditVatReturnSpecification": VatReturnSpecification,
            "amount": number,
            "departmentCode": string,
            "projectCode": string,
            "productCode": string,
            "quantity": number,
            "quantity2": number,
            "description": string,
            "date": Date,
            "currencyCode": string,
            "currencyRate": number,
            "lastChanged": Date,
            "isDeleted": boolean,
            "invoiceNo": string,
            "accrual": {
                "isActive": boolean,
                "fromDate": Date,
                "toDate": Date,
                "balanceAccountCode": number,
                "balanceAccountAgricultureDepartment": AgricultureDepartment
            },
            "debitAgricultureDepartment": AgricultureDepartment,
            "creditAgricultureDepartment": AgricultureDepartment
        }],
        "lastChanged": Date,
        "bankAccountCode": string,
        "externalImportReference": string,
        "contractNo": string,
        "purchaseOrderNo": string,
        "comment": string,
        "departmentCode": string,
        "projectCode": string,
        "payout": boolean,
        "paymentDate": Date,
        "submitForApproval": boolean,
        "isSubmittedForApproval": boolean,
        "submitForApprovalErrorMessage": string
    }],
    "count": number,
    "success": boolean
}

```



