
GET Voucher/PayrollJournalVoucher/
================

Gets a list of [PayrollJournalVoucher](Type_PayrollJournalVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.PayrollJournal .

### Url
```http
https://api.poweroffice.net/Voucher/PayrollJournalVoucher/
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
DataPage&lt;GoApi.Voucher.PayrollJournalVoucher&gt;|No|DataPage&lt;PayrollJournalVoucher&gt;.

### Request Signature
```http
GET /Voucher/PayrollJournalVoucher/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "description": string,
        "lines": [{
            "date": Date,
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
            "productCode": string,
            "quantity": number,
            "accountCode": number,
            "vatCode": string,
            "vatReturnSpecification": VatReturnSpecification,
            "description": string,
            "externalImportLineReference": string
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



