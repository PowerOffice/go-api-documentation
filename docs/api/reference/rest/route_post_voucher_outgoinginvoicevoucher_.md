
POST Voucher/OutgoingInvoiceVoucher/
================

Saves a [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) and posts it to the general ledger.

### Url
```http
https://api.poweroffice.net/Voucher/OutgoingInvoiceVoucher/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md)|No|The voucher

### Response Content
Type | Array | Description
:----|:------|:------------
[OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md)|No|OutgoingInvoiceVoucher

### Request Signature
```http
POST /Voucher/OutgoingInvoiceVoucher/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "customerCode": number,
    "purchaseOrderNo": string,
    "contractNo": string,
    "deliveryTerm": string,
    "deliveryDate": Date,
    "customerReference": string,
    "ourReferenceEmployeeCode": number,
    "dueDate": Date,
    "currencyRate": number,
    "cid": string,
    "invoiceNo": number,
    "lines": [{
        "unit": string,
        "unitCostPrice": number,
        "discountPercent": number,
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
    "importedOrderNo": number,
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
        "customerCode": number,
        "purchaseOrderNo": string,
        "contractNo": string,
        "deliveryTerm": string,
        "deliveryDate": Date,
        "customerReference": string,
        "ourReferenceEmployeeCode": number,
        "dueDate": Date,
        "currencyRate": number,
        "cid": string,
        "invoiceNo": number,
        "lines": [{
            "unit": string,
            "unitCostPrice": number,
            "discountPercent": number,
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
        "hasVoucherDocumentation": boolean,
        "importedOrderNo": number,
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



