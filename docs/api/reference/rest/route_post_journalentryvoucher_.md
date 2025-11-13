
POST JournalEntryVoucher/
================

Saves the specified [JournalEntryVoucher](Type_JournalEntryVoucher.md) and returns the entity with an assigned Id.

### Url
```http
https://api.poweroffice.net/JournalEntryVoucher/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[JournalEntryVoucher](Type_JournalEntryVoucher.md)|No|The journal entry voucher.

### Response Content
Type | Array | Description
:----|:------|:------------
[JournalEntryVoucher](Type_JournalEntryVoucher.md)|No|JournalEntryVoucher.

### Request Signature
```http
POST /JournalEntryVoucher/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
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
    "bankAccountCode": string,
    "externalImportReference": string,
    "contractNo": string,
    "purchaseOrderNo": string,
    "comment": string,
    "departmentCode": string,
    "projectCode": string,
    "payout": boolean,
    "paymentDate": Date,
    "submitForApproval": boolean
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
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
    },
    "success": boolean
}

```



