
GET Project/{id}/
================

Gets the specified [Project](Type_Project.md) by its id.

### Url
```http
https://api.poweroffice.net/Project/{id}/
```

### Http Verb

GET



### Response Content
Type | Array | Description
:----|:------|:------------
[Project](Type_Project.md)|No|Project.

### Request Signature
```http
GET /Project/{id}/ HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": {
        "id": number,
        "customerCode": number,
        "code": string,
        "name": string,
        "isBillable": boolean,
        "status": ProjectStatus,
        "startDate": Date,
        "endDate": Date,
        "projectManagerCode": number,
        "parentProjectCode": string,
        "externalCode": number,
        "departmentCode": string,
        "locationCode": string,
        "allowAllActivities": boolean,
        "allowAllEmployees": boolean,
        "lastChanged": Date,
        "createdFromImportJournalId": string (Guid),
        "brandingThemeCode": string,
        "contractNo": string,
        "isInternal": boolean,
        "progress": number,
        "budgetedHours": number,
        "budgetedHourlyRate": number,
        "budgetedExpenseHours": number,
        "budgetedRevenueHours": number,
        "budgetedOtherExpenses": number,
        "budgetedTotalRevenue": number,
        "budgetedCostOfGoods": number,
        "purchaseOrderNo": string,
        "paymentTerms": number,
        "attachExpenseVouchersWhenBilling": boolean,
        "markupHourlyRateEnabled": boolean,
        "hourlyRateFactorWithMarkup": number,
        "hourlyRateMarkupDescription": string,
        "markupOtherExpensesEnabled": boolean,
        "otherExpensesFactorWithMarkup": number,
        "otherExpensesMarkupDescription": string,
        "deliveryTerms": string,
        "billingMethod": ProjectBillingMethod,
        "billingHourlyRateSpecification": HourlyRateSpecification,
        "fixedPrice": number,
        "billableRate": number,
        "contactPersonId": number,
        "createdDate": Date,
        "denyTimeTracking": boolean
    },
    "success": boolean
}

```



