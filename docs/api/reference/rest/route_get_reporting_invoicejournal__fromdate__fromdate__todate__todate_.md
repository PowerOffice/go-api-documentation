
GET Reporting/InvoiceJournal/?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;
================

Gets [InvoiceJournalLine](Type_InvoiceJournalLine.md) for the invoices and credit notes in the specified date range

### Url
```http
https://api.poweroffice.net/Reporting/InvoiceJournal/?fromDate=<fromDate>&toDate=<toDate>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
fromDate|Date|From date.
toDate|Date|To date.
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.InvoiceJournal.InvoiceJournalLine&gt;|No|Invoice journal lines

### Request Signature
```http
GET /Reporting/InvoiceJournal/?fromDate=<fromDate>&toDate=<toDate>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "voucherType": VoucherType,
        "voucherNo": number,
        "invoiceNo": number,
        "currency": string,
        "voucherDate": Date,
        "dueDate": Date,
        "reference": string,
        "netAmount": number,
        "vatAmount": number,
        "totalAmount": number,
        "cID": string,
        "text": string,
        "languageCode": string,
        "creditNoteInvoiceReference": number,
        "invoiceJournalSalesLines": [{
            "id": number,
            "voucherLineType": VoucherLineType,
            "quantity": number,
            "unitPrice": number,
            "discountPercent": number,
            "description": string,
            "unit": string,
            "totalExclusive": number,
            "totalVat": number,
            "totalInclusive": number
        }],
        "invoiceStatus": InvoiceStatus,
        "reminderSentDate": Date,
        "reminderDueDate": Date,
        "importedOrderNo": number,
        "currencyRate": number,
        "createdFromImportJournalId": string (Guid),
        "isOnHold": boolean,
        "externalCaseNumber": string,
        "lastChanged": Date,
        "balance": number,
        "externalImportReference": string,
        "expectedDueDate": Date,
        "invoiceDebtCollectionStatus": DebtCollectionStatus,
        "debtCollectionCaseStatus": DebtCollectionCaseStatus,
        "debtCollectionCode": string,
        "hasVoucherDocumentation": boolean
    }],
    "count": number,
    "success": boolean
}

```



