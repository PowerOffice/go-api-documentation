
POST Import/
================

Saves the provided [Import](Type_Import.md) .         This will upload the import to PowerOffice Go and users might manually post the imports there or the integration can do this through the Go.Web.ExternalApi.Controllers.ImportController.Post(GoApi.Import.Import) method.

### Url
```http
https://api.poweroffice.net/Import/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[Import](Type_Import.md)|No|The import.

### Response Content
Type | Array | Description
:----|:------|:------------
string (Guid)|No|The ID of the uploaded import.

### Request Signature
```http
POST /Import/ HTTP/1.1
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



