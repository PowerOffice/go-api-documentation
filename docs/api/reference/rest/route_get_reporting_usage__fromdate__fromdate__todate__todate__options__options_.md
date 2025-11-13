
GET Reporting/Usage/?fromDate=&lt;fromDate&gt;&toDate=&lt;toDate&gt;&options=&lt;options&gt;
================

Gets all the [Usage](Type_Usage.md) between two dates.

### Url
```http
https://api.poweroffice.net/Reporting/Usage/?fromDate=<fromDate>&toDate=<toDate>&options=<options>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
fromDate|Date|From date.
toDate|Date|To date.
options|[Usage](Type_Usage.md)|The options.


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.Usage.Usage&gt;|No|DataPage&lt;Usage&gt;.

### Request Signature
```http
GET /Reporting/Usage/?fromDate=<fromDate>&toDate=<toDate>&options=<options> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "voucherType": VoucherType,
        "count": number
    }],
    "count": number,
    "success": boolean
}

```



