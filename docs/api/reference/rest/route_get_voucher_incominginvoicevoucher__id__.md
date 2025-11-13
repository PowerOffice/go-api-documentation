
GET Voucher/IncomingInvoiceVoucher/{id}/
================

Gets the specified [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) by its identifier.         Will throw an exception if the [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) does not exist, or it has not been created by the integration querying this method.

### Url
```http
https://api.poweroffice.net/Voucher/IncomingInvoiceVoucher/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md)|No|IncomingInvoiceVoucher.

### Request Signature
```http
GET /Voucher/IncomingInvoiceVoucher/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "supplierCode": number,
        "supplierBankAccountCode": string,
        "dueDate": Date,
        "currencyRate": number,
        "cid": string,
        "invoiceNo": string,
        "lines": [{
            "accrual": {
                "resultAccountCode": number,
                "resultAccountAgricultureDepartment": AgricultureDepartment,
                "numOfMonths": number,
                "isActive": boolean,
                "fromDate": Date,
                "toDate": Date,
                "balanceAccountCode": number,
                "balanceAccountAgricultureDepartment": AgricultureDepartment
            },
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
        "customMatchingReference": string,
        "contractNo": string,
        "purchaseOrderNo": string,
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



