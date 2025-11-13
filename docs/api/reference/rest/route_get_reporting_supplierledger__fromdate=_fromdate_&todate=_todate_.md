
GET Reporting/SupplierLedger/?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;
================



### Url
```
http://api.poweroffice.net/Reporting/SupplierLedger/?fromDate=<fromDate>&toDate=<toDate>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
fromDate|Date|No|
toDate|Date|No|
$filter|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Result set filter
$orderby|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Sort order
$skip|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Skip records in result set
$top|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[SupplierLedgerEntry](Type_SupplierLedgerEntry.md)|Yes|

### Request Signature
```
GET /Reporting/SupplierLedger/?fromDate=<fromDate>&toDate=<toDate>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]
```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "supplier": {
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
        "voucherType": number (Enum),
        "documentNo": string,
        "matchId": number,
        "cID": string,
        "lastChanged": Date,
        "createdDate": Date
    }],
    "count": number,
    "success": boolean
}

```




