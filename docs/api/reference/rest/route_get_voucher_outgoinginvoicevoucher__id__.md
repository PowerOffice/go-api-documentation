
GET Voucher/OutgoingInvoiceVoucher/{id}/
================

Gets the specified [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) by its identifier.         Will throw an exception if the [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) does not exist, or it has not been created by the integration querying this method.

### Url
```http
https://api.poweroffice.net/Voucher/OutgoingInvoiceVoucher/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md)|No|OutgoingInvoiceVoucher.

### Request Signature
```http
GET /Voucher/OutgoingInvoiceVoucher/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

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



