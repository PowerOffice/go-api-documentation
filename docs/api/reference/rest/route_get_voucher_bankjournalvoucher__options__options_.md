
GET Voucher/BankJournalVoucher/?options=&lt;options&gt;
================

Gets a list of [BankJournalVoucher](Type_BankJournalVoucher.md) filtered by odata query. This query will only return the bank journal vouchers created by the integration itself, not all vouchers of type One.Domain.Entities.Accounting.Vouchers.VoucherType.BankJournal .

### Url
```http
https://api.poweroffice.net/Voucher/BankJournalVoucher/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[BankJournalVoucher](Type_BankJournalVoucher.md)|The odata query options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Voucher.BankJournalVoucher&gt;|No|DataPage&lt;BankJournalVoucher&gt;.

### Request Signature
```http
GET /Voucher/BankJournalVoucher/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "description": string,
        "autoAdjustCurrencyExchangeDifference": boolean,
        "lines": [{
            "date": Date,
            "invoiceNo": string,
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
    }],
    "count": number,
    "success": boolean
}

```



