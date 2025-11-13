
GET Reporting/CustomerLedger/?toDate=&lt;toDate&gt;
================

Gets the [CustomerLedgerEntry](Type_CustomerLedgerEntry.md) that are open items report on a certain date. This will only return the entries that are not         matched out.

### Url
```http
https://api.poweroffice.net/Reporting/CustomerLedger/?toDate=<toDate>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
toDate|Date|To date.
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.Ledger.CustomerLedgerEntry&gt;|No|One.Common.Api.DataPage&lt;GoApi.Reporting.Ledger.CustomerLedgerEntry&gt;.

### Request Signature
```http
GET /Reporting/CustomerLedger/?toDate=<toDate>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "importedOrderNo": number,
        "customerCode": number,
        "hasVoucherDocumentation": boolean,
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



