
GET Budget/
================

Gets a list of budgets filtered by odata query.

### Url
```http
https://api.poweroffice.net/Budget/
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
DataPage&lt;GoApi.Budget.Budget&gt;|No|DataPage&lt;Budget&gt;.

### Request Signature
```http
GET /Budget/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "name": string,
        "managerCode": number,
        "managerName": string,
        "departmentCode": string,
        "departmentName": string,
        "year": number,
        "startDate": Date,
        "endDate": Date,
        "budgetLineItems": [{
            "accountCode": number,
            "accountName": string,
            "month": number,
            "amount": number,
            "year": number
        }]
    }],
    "count": number,
    "success": boolean
}

```



