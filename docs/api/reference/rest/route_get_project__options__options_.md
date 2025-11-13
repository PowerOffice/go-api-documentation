
GET Project/?options=&lt;options&gt;
================

Gets a list of [Project](Type_Project.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Project/?options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
options|[Project](Type_Project.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Projects.Project&gt;|No|DataPage&lt;Project&gt;.

### Request Signature
```http
GET /Project/?options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
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
    }],
    "count": number,
    "success": boolean
}

```



