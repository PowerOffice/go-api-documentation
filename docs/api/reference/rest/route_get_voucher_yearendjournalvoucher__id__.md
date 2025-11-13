
GET Voucher/YearEndJournalVoucher/{id}/
================

Gets the specified [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) by its identifier.         Will throw an exception if the [YearEndJournalVoucher](Type_YearEndJournalVoucher.md) does not exist, or it has not been created by the integration querying this method.

### Url
```http
https://api.poweroffice.net/Voucher/YearEndJournalVoucher/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[YearEndJournalVoucher](Type_YearEndJournalVoucher.md)|No|YearEndJournalVoucher.

### Request Signature
```http
GET /Voucher/YearEndJournalVoucher/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



