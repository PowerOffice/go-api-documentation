
GET Voucher/OutgoingInvoiceVoucher/?options=&lt;options&gt;
================

Gets a list of [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.OutgoingInvoice or GoApi.Common.VoucherType.OutgoingCreditNote .

### Url
```http
https://api.poweroffice.net/Voucher/OutgoingInvoiceVoucher/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md)|The odata query options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Voucher.OutgoingInvoiceVoucher&gt;|No|DataPage&lt;OutgoingInvoiceVoucher&gt;.

### Request Signature
```http
GET /Voucher/OutgoingInvoiceVoucher/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



