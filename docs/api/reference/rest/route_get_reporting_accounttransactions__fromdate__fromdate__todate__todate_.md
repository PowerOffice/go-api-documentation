
GET Reporting/AccountTransactions/?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;
================

Gets all the [AccountTransaction](Type_AccountTransaction.md) in the specified date range (FromDate - ToDate) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Reporting/AccountTransactions/?fromDate=<fromDate>&toDate=<toDate>
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
DataPage&lt;GoApi.Reporting.AccountTransactions.AccountTransaction&gt;|No|DataPage&lt;AccountTransaction&gt;.

### Request Signature
```http
GET /Reporting/AccountTransactions/?fromDate=<fromDate>&toDate=<toDate>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "accountCode": number,
        "date": Date,
        "voucherNo": number,
        "importedVoucherNo": number,
        "voucherType": VoucherType,
        "text": string,
        "description": string,
        "vatCode": string,
        "vatAmount": number,
        "vatRate": number,
        "vatReturnSpecification": VatReturnSpecification,
        "amount": number,
        "currencyCode": string,
        "currencyAmount": number,
        "projectCode": string,
        "productCode": string,
        "departmentCode": string,
        "dim1Code": string,
        "dim2Code": string,
        "dim3Code": string,
        "voucherImagesCount": number,
        "lastChanged": Date,
        "createdDate": Date,
        "customerAccountNo": number,
        "supplierAccountNo": number,
        "employeeAccountNo": number,
        "voucherDueDate": Date,
        "voucherReference": string,
        "voucherCID": string,
        "voucherCreditNoteReference": string,
        "voucherId": string (Guid),
        "documentNo": string,
        "createdFromImportJournalId": string (Guid),
        "isCreatedFromEhf": boolean,
        "bankTransferId": string (Guid),
        "subLedgerEntryId": number,
        "externalImportReference": string,
        "hasVoucherDocumentation": boolean,
        "ourReferenceEmployeeCode": number,
        "customMatchingReference": string,
        "quantity": number,
        "voucherDate": Date,
        "reversedVoucherNo": number
    }],
    "count": number,
    "success": boolean
}

```



