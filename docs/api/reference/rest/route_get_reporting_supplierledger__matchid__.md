
GET Reporting/SupplierLedger/{matchId}/
================

Gets all [SupplierLedgerEntry](Type_SupplierLedgerEntry.md) associated with a match id.

### Url
```http
https://api.poweroffice.net/Reporting/SupplierLedger/{matchId}/
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
DataPage&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt;|No|One.Common.Api.DataPage&lt;GoApi.Reporting.Ledger.SupplierLedgerEntry&gt;.

### Request Signature
```http
GET /Reporting/SupplierLedger/{matchId}/?$filter=<ODataFilter> HTTP/1.1
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
        "dim3Name": string
    }],
    "count": number,
    "success": boolean
}

```



