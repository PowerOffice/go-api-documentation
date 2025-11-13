
GET Reporting/AccountTransactions/{accountCode}?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;
================

Get account transactions for an account in the specified date period

### Url
```
http://api.poweroffice.net/Reporting/AccountTransactions/{accountCode}?fromDate=<fromDate>&toDate=<toDate>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
fromDate|Date|Yes|From date.
toDate|Date|Yes|To date.
$filter|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Result set filter
$orderby|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Sort order
$skip|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Skip records in result set
$top|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[AccountTransaction](Type_AccountTransaction.md)|Yes|DataPage&lt;AccountTransaction&gt;.

### Request Signature
```
GET /Reporting/AccountTransactions/{accountCode}?fromDate=<fromDate>&toDate=<toDate>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]
```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "date": Date,
        "voucherNo": number,
        "voucherType": number (Enum),
        "text": string,
        "description": string,
        "vatCode": string,
        "vatAmount": number,
        "vatRate": number,
        "amount": number,
        "currencyCode": string,
        "currencyAmount": number,
        "projectCode": string,
        "departmentCode": string,
        "voucherImagesCount": number,
        "lastChanged": Date,
        "createdDate": Date,
        "customerAccountNo": number,
        "supplierAccountNo": number,
        "employeeAccountNo": number
    }],
    "count": number,
    "success": boolean
}

```




