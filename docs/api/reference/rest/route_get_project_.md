
GET Project/
================

Gets a list of [Project](Type_Project.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/Project/
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
DataPage&lt;GoApi.Projects.Project&gt;|No|DataPage&lt;Project&gt;.

### Request Signature
```http
GET /Project/?$filter=<ODataFilter> HTTP/1.1
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
        "contactPersonId": number
    }],
    "count": number,
    "success": boolean
}

```



