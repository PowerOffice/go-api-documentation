
GET Import/?options=&lt;options&gt;
================

Gets a list of [Import](Type_Import.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Import/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Import](Type_Import.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Import.Import&gt;|No|DataPage&lt;Import&gt;.

### Request Signature
```http
GET /Import/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "description": string,
        "date": Date,
        "type": ImportType,
        "isPosted": boolean,
        "importLines": [{
            "id": number,
            "documentDate": Date,
            "documentNumber": number,
            "postingDate": Date,
            "description": string,
            "accountNumber": number,
            "agricultureDepartment": AgricultureDepartment,
            "customerCode": number,
            "supplierCode": number,
            "employeeCode": number,
            "projectCode": string,
            "departmentCode": string,
            "dim1Code": string,
            "dim2Code": string,
            "dim3Code": string,
            "locationCode": string,
            "quantity": number,
            "amount": number,
            "vatCode": string,
            "vatReturnSpecification": VatReturnSpecification,
            "currencyCode": string,
            "currencyAmount": number,
            "invoiceNo": string,
            "cid": string,
            "discount": number,
            "dueDate": Date,
            "reference": string,
            "productCode": string,
            "deliveryDate": Date,
            "purchaseOrderNo": string,
            "customMatchingReference": string,
            "contractNo": string,
            "saftSourceId": string,
            "saftBatchId": string
        }],
        "salesOrders": [{
            "id": number,
            "orderNo": number,
            "contractNo": string,
            "orderDate": Date,
            "salesPersonEmployeeNo": number,
            "projectCode": string,
            "departmentCode": string,
            "customerCode": number,
            "reference": string,
            "paymentTerms": number,
            "currency": string,
            "recurringInfo": {
                "id": number,
                "recurringInvoiceActive": boolean,
                "recurringInvoiceRepeatTimes": number,
                "recurringInvoiceEndDate": Date,
                "recurringSendMethod": SalesOrderSendMethod,
                "recurringInvoiceSendFrequency": number,
                "recurringSendFrequencyUnit": SalesOrderSendFrequencyUnit,
                "nextRecurringInvoiceDate": Date,
                "recurringDaysInAdvance": number
            },
            "mergeWithPreviousOrder": boolean,
            "contactPersonId": number,
            "deliveryDate": Date,
            "salesOrderLines": [{
                "id": number,
                "description": string,
                "projectCode": string,
                "departmentCode": string,
                "quantity": number,
                "discount": number,
                "productCode": string,
                "salesOrderLineUnitPrice": number,
                "sortOrder": number,
                "vatReturnSpecification": VatReturnSpecification
            }],
            "purchaseOrderNo": string,
            "brandingThemeCode": string
        }],
        "file": {
            "importFileType": ImportFileType,
            "fileName": string,
            "base64EncodedData": string
        },
        "lastChanged": Date,
        "externalImportReference": string
    }],
    "count": number,
    "success": boolean
}

```



