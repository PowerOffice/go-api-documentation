
POST Voucher/YearEndJournalVoucher/
================

Saves a [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) and posts it to the general ledger.

### Url
```http
https://api.poweroffice.net/Voucher/YearEndJournalVoucher/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[YearEndJournalVoucher](Type_YearEndJournalVoucher.md)|No|The voucher

### Response Content
Type | Array | Description
:----|:------|:------------
[YearEndJournalVoucher](Type_YearEndJournalVoucher.md)|No|YearEndJournalVoucher

### Request Signature
```http
POST /Voucher/YearEndJournalVoucher/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "description": string,
    "lines": [{
        "currencyRate": number,
        "currencyCode": string,
        "cID": string,
        "customMatchingReference": string,
        "id": number,
        "amount": number,
        "projectCode": string,
        "departmentCode": string,
        "dim1Code": string,
        "dim2Code": string,
        "dim3Code": string,
        "locationCode": string,
        "productCode": string,
        "quantity": number,
        "accountCode": number,
        "vatCode": string,
        "vatReturnSpecification": VatReturnSpecification,
        "description": string,
        "externalImportLineReference": string,
        "agricultureDepartment": AgricultureDepartment
    }],
    "id": string (Guid),
    "voucherDate": Date,
    "importedVoucherNo": number,
    "projectCode": string,
    "departmentCode": string,
    "dim1Code": string,
    "dim2Code": string,
    "dim3Code": string,
    "locationCode": string,
    "currencyCode": string,
    "externalImportReference": string,
    "saftSourceId": string,
    "saftBatchId": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "description": string,
        "lines": [{
            "currencyRate": number,
            "currencyCode": string,
            "cID": string,
            "customMatchingReference": string,
            "id": number,
            "amount": number,
            "projectCode": string,
            "departmentCode": string,
            "dim1Code": string,
            "dim2Code": string,
            "dim3Code": string,
            "locationCode": string,
            "productCode": string,
            "quantity": number,
            "accountCode": number,
            "vatCode": string,
            "vatReturnSpecification": VatReturnSpecification,
            "description": string,
            "externalImportLineReference": string,
            "agricultureDepartment": AgricultureDepartment
        }],
        "id": string (Guid),
        "voucherDate": Date,
        "voucherNo": number,
        "importedVoucherNo": number,
        "projectCode": string,
        "departmentCode": string,
        "dim1Code": string,
        "dim2Code": string,
        "dim3Code": string,
        "locationCode": string,
        "currencyCode": string,
        "createdDate": Date,
        "isReversed": boolean,
        "externalImportReference": string,
        "hasImportedDocumentation": boolean,
        "saftSourceId": string,
        "saftBatchId": string
    },
    "success": boolean
}

```



