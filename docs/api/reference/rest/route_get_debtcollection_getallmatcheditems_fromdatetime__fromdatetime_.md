
GET DebtCollection/GetAllMatchedItems?fromDateTime=&lt;fromDateTime&gt;
================

Gets all the matched items for each invoice where changes is newer than fromDateTime.          This will contain all voucher's sub ledger entries (i.e. Payments/Creditnotes) that have been matched with the invoice's sub ledger entry.

### Url
```http
https://api.poweroffice.net/DebtCollection/GetAllMatchedItems?fromDateTime=<fromDateTime>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
fromDateTime|Date|From datetime.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.DebtCollection.DebtCollectionCaseWithMatches&gt;|No|DataPage&lt;DebtCollectionCaseWithMatches&gt;.

### Request Signature
```http
GET /DebtCollection/GetAllMatchedItems?fromDateTime=<fromDateTime> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "matchedItems": [{
            "id": number,
            "customerCode": number,
            "voucherDate": Date,
            "postingDate": Date,
            "voucherNo": number,
            "voucherType": VoucherType,
            "amount": number,
            "currencyAmount": number,
            "currencyCode": string,
            "cID": string,
            "importedVoucherNo": number,
            "createdFromImportId": string (Guid),
            "voucherId": string (Guid),
            "isWriteOff": boolean,
            "lastChanged": Date,
            "externalImportReference": string,
            "isNoteMainEntry": boolean,
            "matchId": number,
            "paidFromAccount": string
        }]
    }],
    "count": number,
    "success": boolean
}

```



