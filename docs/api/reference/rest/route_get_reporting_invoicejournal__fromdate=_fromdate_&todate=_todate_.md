
GET Reporting/InvoiceJournal/?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;
================

Gets invoice journal lines for the invoices in the specified date range

### Url
```
http://api.poweroffice.net/Reporting/InvoiceJournal/?fromDate=<fromDate>&toDate=<toDate>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
fromDate|Date|Yes|From date.
toDate|Date|Yes|To date.
$filter|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Result set filter
$orderby|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Sort order
$skip|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Skip records in result set
$top|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[InvoiceJournalLine](Type_InvoiceJournalLine.md)|Yes|Invoice journal lines

### Request Signature
```
GET /Reporting/InvoiceJournal/?fromDate=<fromDate>&toDate=<toDate>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]
```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "voucherType": number (Enum),
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
        "customer": {
            "name": string,
            "legalName": string,
            "contactPersonId": number,
            "vatNumber": string,
            "websiteUrl": string,
            "since": Date,
            "currencyCode": string,
            "invoiceDeliveryType": number (Enum),
            "isVatFree": boolean,
            "id": number,
            "code": number,
            "mailAddress": {
                "city": string,
                "zipCode": string,
                "address1": string,
                "address2": string,
                "address3": string,
                "countryCode": string,
                "id": number,
                "isPrimary": boolean
            },
            "streetAddress": {
                "city": string,
                "zipCode": string,
                "address1": string,
                "address2": string,
                "address3": string,
                "countryCode": string,
                "id": number,
                "isPrimary": boolean
            },
            "streetAddresses": {
                "city": string,
                "zipCode": string,
                "address1": string,
                "address2": string,
                "address3": string,
                "countryCode": string,
                "id": number,
                "isPrimary": boolean
            },
            "emailAddress": string,
            "phoneNumber": string,
            "isArchived": boolean,
            "lastChanged": Date
        },
        "invoiceJournalSalesLines": [{
            "voucherLineType": number (Enum),
            "product": {
                "id": number,
                "code": string,
                "name": string,
                "description": string,
                "productGroupId": number,
                "type": number (Enum),
                "unit": string,
                "costPrice": number,
                "salesPrice": number,
                "salesAccount": number,
                "vatExemptSalesAccount": number,
                "gtin": string,
                "lastChanged": Date,
                "productsOnHand": number
            },
            "quantity": number,
            "unitPrice": number,
            "discountPercent": number,
            "description": string,
            "unit": string,
            "totalExclusive": number,
            "totalVat": number,
            "totalInclusive": number
        }],
        "invoiceStatus": number (Enum),
        "importedOrderNo": number
    }],
    "count": number,
    "success": boolean
}

```




