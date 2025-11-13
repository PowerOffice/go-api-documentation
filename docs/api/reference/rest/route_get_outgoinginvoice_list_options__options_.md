
GET OutgoingInvoice/List?options=&lt;options&gt;
================

Gets a list of [OutgoingInvoiceListItem](Type_OutgoingInvoiceListItem.md) filtered by odata query. This is a lightweight version of an [OutgoingInvoice](Type_OutgoingInvoice.md) .

### Url
```http
https://api.poweroffice.net/OutgoingInvoice/List?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[OutgoingInvoiceListItem](Type_OutgoingInvoiceListItem.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Invoices.OutgoingInvoiceListItem&gt;|No|DataPage&lt;OutgoingInvoiceListItem&gt;.

### Request Signature
```http
GET /OutgoingInvoice/List?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
        "locationCode": string,
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



