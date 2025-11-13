
GET Voucher/OutgoingInvoiceVoucher/
================

Gets a list of [OutgoingInvoiceVoucher](Type_OutgoingInvoiceVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type GoApi.Common.VoucherType.OutgoingInvoice or GoApi.Common.VoucherType.OutgoingCreditNote .

### Url
```http
https://api.poweroffice.net/Voucher/OutgoingInvoiceVoucher/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Voucher.OutgoingInvoiceVoucher&gt;|No|DataPage&lt;OutgoingInvoiceVoucher&gt;.

### Request Signature
```http
GET /Voucher/OutgoingInvoiceVoucher/?$filter=<ODataFilter> HTTP/1.1
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
                "isActive": boolean,
                "fromDate": Date,
                "toDate": Date,
                "balanceAccountCode": number,
                "resultAccountCode": number,
                "numOfMonths": number
            },
            "id": number,
            "amount": number,
            "projectCode": string,
            "departmentCode": string,
            "dim1Code": string,
            "dim2Code": string,
            "dim3Code": string,
            "productCode": string,
            "quantity": number,
            "accountCode": number,
            "vatCode": string,
            "vatReturnSpecification": VatReturnSpecification,
            "description": string,
            "externalImportLineReference": string
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



