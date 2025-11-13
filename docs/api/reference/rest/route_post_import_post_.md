
POST Import/Post/
================

Imports the previously uploaded [Import](Type_Import.md) on the client.

### Url
```http
https://api.poweroffice.net/Import/Post/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Import](Type_Import.md)|No|The journal.

### Response Content
Type | Array | Description
:----|:------|:------------
string (Guid)|No|The id of the import.

### Request Signature
```http
POST /Import/Post/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "id": string (Guid),
    "description": string,
    "date": Date,
    "type": ImportType,
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
        "purchaseOrderNo": string,
        "brandingThemeCode": string
    }],
    "file": {
        "importFileType": ImportFileType,
        "fileName": string,
        "base64EncodedData": string
    },
    "externalImportReference": string
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": string (Guid),
    "success": boolean
}

```


### Remarks
The journal must already be saved (ie. [Import](Type_Import.md) /&gt; has been assigned).     The journal instance only needs the Id to be set when calling this method, as the saved journal will be loaded     server side, and posted.


