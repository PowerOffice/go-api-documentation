
GET Voucher/IncomingInvoiceVoucher/?options=&lt;options&gt;
================

Gets a list of [IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.IncomingInvoice or GoApi.Common.VoucherType.IncomingCreditNote .

### Url
```http
https://api.poweroffice.net/Voucher/IncomingInvoiceVoucher/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[IncomingInvoiceVoucher](Type_IncomingInvoiceVoucher.md)|The odata query options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Voucher.IncomingInvoiceVoucher&gt;|No|DataPage&lt;IncomingInvoiceVoucher&gt;.

### Request Signature
```http
GET /Voucher/IncomingInvoiceVoucher/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



