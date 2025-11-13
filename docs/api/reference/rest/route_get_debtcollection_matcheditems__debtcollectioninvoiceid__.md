
GET DebtCollection/MatchedItems/{debtCollectionInvoiceId}/
================

Gets all the matched items on a debt collection invoice by the debt collection invoice id.          This will contain all voucher's sub ledger entries (i.e. Payments/Creditnotes) that have been matched with the invoice's sub ledger entry.

### Url
```http
https://api.poweroffice.net/DebtCollection/MatchedItems/{debtCollectionInvoiceId}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.DebtCollection.DebtCollectionInvoiceMatch&gt;|No|DataPage&lt;DebtCollectionInvoiceMatch&gt;.

### Request Signature
```http
GET /DebtCollection/MatchedItems/{debtCollectionInvoiceId}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



