
GET Reporting/AccountTransactions/{accountCode}?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;
================

Gets all the [AccountTransaction](Type_AccountTransaction.md) on a given GeneralLedgerAccount by its account code in the specified date range (FromDate - ToDate) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Reporting/AccountTransactions/{accountCode}?fromDate=<fromDate>&toDate=<toDate>&options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
fromDate|Date|From date.
toDate|Date|To date.
options|[AccountTransaction](Type_AccountTransaction.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.AccountTransactions.AccountTransaction&gt;|No|DataPage&lt;AccountTransaction&gt;.

### Request Signature
```http
GET /Reporting/AccountTransactions/{accountCode}?fromDate=<fromDate>&toDate=<toDate>&options=<options> HTTP/1.1
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
        "locationCode": string,
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
        "quantity2": number,
        "voucherDate": Date,
        "reversedVoucherNo": number,
        "correctionOfVoucherNo": number,
        "isReversed": boolean,
        "isNoteMainEntry": boolean,
        "agricultureDepartment": AgricultureDepartment
    }],
    "count": number,
    "success": boolean
}

```



