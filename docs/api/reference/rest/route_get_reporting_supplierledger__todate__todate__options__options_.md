
GET Reporting/SupplierLedger/?toDate=&lt;toDate&gt;&options=&lt;options&gt;
================

Gets the [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.

### Url
```http
https://api.poweroffice.net/Reporting/SupplierLedger/?toDate=<toDate>&options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
toDate|Date|To date.
options|[SupplierLedgerEntry](Type_SupplierLedgerEntry.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt;|No|One.Common.Api.DataPage&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt;.

### Request Signature
```http
GET /Reporting/SupplierLedger/?toDate=<toDate>&options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "isCreatedFromEhf": boolean,
        "supplierCode": number,
        "isWriteOff": boolean,
        "id": number,
        "postingDate": Date,
        "dueDate": Date,
        "voucherNo": number,
        "currencyCode": string,
        "currencyAmount": number,
        "amount": number,
        "balance": number,
        "voucherId": string (Guid),
        "voucherDate": Date,
        "voucherType": VoucherType,
        "documentNo": string,
        "matchId": number,
        "cID": string,
        "lastChanged": Date,
        "createdDate": Date,
        "createdFromImportJournalId": string (Guid),
        "externalImportReference": string,
        "customMatchingReference": string,
        "isCreatedByCurrentIntegration": boolean,
        "factoringInvoiceStatus": number,
        "factoringIntegrationName": string,
        "invoiceDebtCollectionStatus": number,
        "debtCollectionCaseCode": string,
        "debtCollectionCaseId": string (Guid),
        "projectCode": string,
        "projectName": string,
        "departmentCode": string,
        "departmentName": string,
        "dim1Code": string,
        "dim1Name": string,
        "dim2Code": string,
        "dim2Name": string,
        "dim3Code": string,
        "dim3Name": string,
        "locationCode": string,
        "locationName": string,
        "reversedVoucherNo": number,
        "correctionOfVoucherNo": number,
        "isReversed": boolean
    }],
    "count": number,
    "success": boolean
}

```



