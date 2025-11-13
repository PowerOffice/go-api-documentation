
GET Quote/List/
================

Gets a list of [QuoteListItem](Type_QuoteListItem.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Quote/List/
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
DataPage&lt;GoApi.Quotes.QuoteListItem&gt;|No|DataPage&lt;QuoteListItem&gt;.

### Request Signature
```http
GET /Quote/List/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "quoteNo": number,
        "quoteDate": Date,
        "expiryDate": Date,
        "quoteAcceptanceStatus": QuoteAcceptanceStatus,
        "quoteAcceptanceDate": Date,
        "id": string (Guid),
        "invoiceDeliveryType": InvoiceDeliveryType,
        "orderNo": number,
        "importedOrderNo": number,
        "orderDate": Date,
        "customerEmail": string,
        "currencyCode": string,
        "customerCode": number,
        "ourReferenceEmployeeCode": number,
        "purchaseOrderNo": string,
        "projectCode": string,
        "dim1Code": string,
        "dim2Code": string,
        "dim3Code": string,
        "totalAmount": number,
        "netAmount": number,
        "departmentCode": string,
        "status": OutgoingInvoiceStatus,
        "documentNo": string,
        "cid": string,
        "paymentTerms": number,
        "lastChanged": Date,
        "createdDate": Date,
        "brandingThemeCode": string,
        "invoiceDeliveryDate": Date,
        "contractNo": string,
        "customerReference": string,
        "deliveryAddressId": number,
        "deliveryAddress1": string,
        "deliveryAddress2": string,
        "deliveryAddressZipCode": string,
        "deliveryAddressCity": string,
        "deliveryAddressCountryCode": string,
        "deliveryTerm": string,
        "currencyExchangeRate": number,
        "balance": number,
        "contactGroupId": number,
        "contactGroup": string,
        "externalImportReference": string,
        "voucherDate": Date,
        "dueDate": Date,
        "expectedDueDate": Date,
        "invoiceDebtCollectionStatus": DebtCollectionStatus,
        "debtCollectionCaseStatus": DebtCollectionCaseStatus,
        "debtCollectionCode": string,
        "relatedDocumentNo": string,
        "customMatchingReference": string,
        "isInvoiceBeingProcessed": boolean,
        "lastErrorMessage": string,
        "sentDate": Date,
        "voucherNo": number,
        "invoiceNo": number
    }],
    "count": number,
    "success": boolean
}

```



