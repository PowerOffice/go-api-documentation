
GET Reporting/Usage/?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;
================



### Url
```
http://api.poweroffice.net/Reporting/Usage/?fromDate=<fromDate>&toDate=<toDate>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Required | Description
:----|:-------|:---------|:------------
fromDate|Date|Yes|
toDate|Date|Yes|
$filter|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Result set filter
$orderby|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Sort order
$skip|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Skip records in result set
$top|[OData](https://github.com/PowerOffice/go-api/blob/master/Documentation/Details/Filtering.md)|No|Maxmimum number of records in result set


### Response Content
Type | Array | Description
:----|:------|:------------
[Usage](Type_Usage.md)|Yes|

### Request Signature
```
GET /Reporting/Usage/?fromDate=<fromDate>&toDate=<toDate>&$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]
```

### Response Signature
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "voucherType": number (Enum),
        "count": number
    }],
    "count": number,
    "success": boolean
}

```




