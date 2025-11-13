
POST RecurringInvoice/
================

Creates or updates the specified [RecurringInvoice](Type_RecurringInvoice.md) .

### Url
```http
https://api.poweroffice.net/RecurringInvoice/
```

### Http Verb

POST


### Request Content
Type | Array | Description
:----|:------|:------------
[RecurringInvoice](Type_RecurringInvoice.md)|No|The recurring invoice.

### Response Content
Type | Array | Description
:----|:------|:------------
[RecurringInvoice](Type_RecurringInvoice.md)|No|RecurringInvoice.

### Request Signature
```http
POST /RecurringInvoice/ HTTP/1.1
Authorization: Bearer [Access Key]
Content-Type: application/json; charset=utf-8

{
    "isActive": boolean,
    "repeatTimes": number,
    "endDate": Date,
    "sendMethod": RecurringSendMethod,
    "sendFrequency": number,
    "sendFrequencyUnit": RecurringSendFrequencyUnit,
    "nextInvoiceDate": Date,
    "daysInAdvance": number,
    "exceptMonths": Months,
    "autoClearExclusions": boolean,
    "id": string (Guid),
    "importedOrderNo": number,
    "orderDate": Date,
    "currencyCode": string,
    "customerCode": number,
    "ourReferenceEmployeeCode": number,
    "purchaseOrderNo": string,
    "projectCode": string,
    "departmentCode": string,
    "dim1Code": string,
    "dim2Code": string,
    "dim3Code": string,
    "locationCode": string,
    "status": OutgoingInvoiceStatus,
    "deliveryDate": Date,
    "contractNo": string,
    "deliveryAddressId": number,
    "brandingThemeCode": string,
    "paymentTerms": number,
    "customerReferenceContactPersonId": number,
    "customerReference": string,
    "deliveryTerm": string,
    "currencyExchangeRate": number,
    "contactGroupId": number,
    "externalImportReference": string,
    "relatedDocumentNo": string,
    "customMatchingReference": string,
    "invoiceNo": number
}

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "isActive": boolean,
        "repeatTimes": number,
        "endDate": Date,
        "sendMethod": RecurringSendMethod,
        "sendFrequency": number,
        "sendFrequencyUnit": RecurringSendFrequencyUnit,
        "nextInvoiceDate": Date,
        "daysInAdvance": number,
        "exceptMonths": Months,
        "autoClearExclusions": boolean,
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
        "totalAmount": number,
        "netAmount": number,
        "departmentCode": string,
        "dim1Code": string,
        "dim2Code": string,
        "dim3Code": string,
        "locationCode": string,
        "status": OutgoingInvoiceStatus,
        "deliveryDate": Date,
        "contractNo": string,
        "deliveryAddressId": number,
        "deliveryAddress1": string,
        "deliveryAddress2": string,
        "deliveryAddressZipCode": string,
        "deliveryAddressCity": string,
        "deliveryAddressCountryCode": string,
        "brandingThemeCode": string,
        "paymentTerms": number,
        "customerReferenceContactPersonId": number,
        "customerReference": string,
        "outgoingInvoiceLines": [{
            "id": number,
            "description": string,
            "projectCode": string,
            "departmentCode": string,
            "dim1Code": string,
            "dim2Code": string,
            "dim3Code": string,
            "locationCode": string,
            "quantity": number,
            "discountPercent": number,
            "productCode": string,
            "unitOfMeasureCode": UnitOfMeasureCode,
            "totalAmount": number,
            "netAmount": number,
            "sortOrder": number,
            "lineType": VoucherLineType,
            "exemptVat": boolean,
            "vatReturnSpecification": VatReturnSpecification,
            "salesPersonEmployeeCode": number,
            "unitPrice": number,
            "unitCost": number,
            "isDeleted": boolean,
            "accrual": {
                "resultAccountCode": number,
                "resultAccountAgricultureDepartment": AgricultureDepartment,
                "numOfMonths": number,
                "isActive": boolean,
                "fromDate": Date,
                "toDate": Date,
                "balanceAccountCode": number,
                "balanceAccountAgricultureDepartment": AgricultureDepartment
            },
            "salesAccount": number,
            "vatExemptSalesAccount": number,
            "vatCode": string,
            "vatRate": number,
            "externalImportLineReference": string
        }],
        "documentNo": string,
        "cid": string,
        "lastChanged": Date,
        "createdDate": Date,
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
    },
    "success": boolean
}

```



