
GET Factoring/
================

Gets the factoring settings for given client.

### Url
```
https://api.poweroffice.net/Factoring/
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
$filter|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|Result set filter
$orderby|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|Sort order
$skip|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|Skip records in result set
$top|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[FactoringSetting](Type_FactoringSetting.md)|Yes|Factoring settings with account codes for interest, cost and supplier subledger account.

### Request Signature
```
GET /Factoring/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "interestAccountCode": number,
        "expenseAccountCode": number,
        "factoringCompanySupplierAccountCode": number
    }],
    "count": number,
    "success": boolean
}

```



