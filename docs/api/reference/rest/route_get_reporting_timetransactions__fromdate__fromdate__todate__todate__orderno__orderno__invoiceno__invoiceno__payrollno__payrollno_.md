
GET Reporting/TimeTransactions/?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&orderNo=&lt;orderNo&gt;&invoiceNo=&lt;invoiceNo&gt;&payrollNo=&lt;payrollNo&gt;
================

Gets a list of [TimeTransaction](Type_TimeTransaction.md) in the time-period specified with from- and to-DateTime and that matches the other 3 in-paramteres filtered by odata query.

### Url
```http
https://api.poweroffice.net/Reporting/TimeTransactions/?fromDate=<fromDate>&toDate=<toDate>&orderNo=<orderNo>&invoiceNo=<invoiceNo>&payrollNo=<payrollNo>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
fromDate|Date|From date.
toDate|Date|To date.
orderNo|number|Order number
invoiceNo|number|Invoice number.
payrollNo|number|Payroll number.
$filter|[OData](Common/Filtering.md)|Result set filter
$orderby|[OData](Common/Filtering.md)|Sort order
$skip|[OData](Common/Filtering.md)|Skip records in result set
$top|[OData](Common/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.TimeTransactions.TimeTransaction&gt;|No|DataPage&lt;TimeTransaction&gt;.

### Request Signature
```http
GET /Reporting/TimeTransactions/?fromDate=<fromDate>&toDate=<toDate>&orderNo=<orderNo>&invoiceNo=<invoiceNo>&payrollNo=<payrollNo>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "date": Date,
        "customerCode": number,
        "customerName": string,
        "projectCode": string,
        "projectName": string,
        "subProjectCode": string,
        "subProjectName": string,
        "projectDepartmentName": string,
        "projectBillingMethod": ProjectBillingMethod,
        "departmentCode": string,
        "departmentName": string,
        "activityCode": string,
        "activityName": string,
        "employeeCode": number,
        "employeeName": string,
        "timeSpecificationName": string,
        "comment": string,
        "internalComment": string,
        "time": string,
        "hours": number,
        "hourlyRate": number,
        "billableHours": number,
        "billableAmount": number,
        "approvalStatus": TimeApprovalStatus,
        "invoiceNo": number,
        "orderNo": number,
        "statusFlags": TimeTrackingEntryStatusFlags,
        "costRate": number,
        "costPrice": number,
        "margin": number,
        "marginPercent": number,
        "payrollNo": number,
        "payrollDescription": string,
        "isAccrued": boolean,
        "accrualVoucherNo": number,
        "isInvoicedExternally": boolean,
        "isInvoicedExternallyBy": string
    }],
    "count": number,
    "success": boolean
}

```



