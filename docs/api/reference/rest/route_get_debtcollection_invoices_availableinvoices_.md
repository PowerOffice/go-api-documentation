
GET DebtCollection/Invoices/AvailableInvoices/
================

Gets the all the available invoices for debt collection filtered by a oData query.

### Url
```http
https://api.poweroffice.net/DebtCollection/Invoices/AvailableInvoices/
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
DataPage&lt;GoApi.DebtCollection.DebtCollectionInvoice&gt;|No|DataPage&lt;DebtCollectionInvoice&gt;.

### Request Signature
```http
GET /DebtCollection/Invoices/AvailableInvoices/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "customerCode": number,
        "invoiceDate": Date,
        "invoiceNo": number,
        "dueDate": Date,
        "originalAmount": number,
        "remainingAmount": number,
        "currencyCode": string,
        "cID": string,
        "lastChanged": Date,
        "lastReminderSentDate": Date,
        "lastReminderDueDate": Date,
        "lastReminderVoucherType": VoucherType,
        "lastReminderEmailAddress": string,
        "invoiceEmailAddress": string,
        "externalImportReference": string,
        "originalPostedAmount": number
    }],
    "count": number,
    "success": boolean
}

```



