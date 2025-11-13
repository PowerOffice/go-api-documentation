
GET Reporting/SupplierBalance/?toDate=&lt;toDate&gt;&contactGroup=&lt;contactGroup&gt;&subledgerNumberSeriesId=&lt;subledgerNumberSeriesId&gt;&includeOnlyOpenItems=&lt;includeOnlyOpenItems&gt;
================

Gets the balance at the specified date for active suppliers.

### Url
```http
https://api.poweroffice.net/Reporting/SupplierBalance/?toDate=<toDate>&contactGroup=<contactGroup>&subledgerNumberSeriesId=<subledgerNumberSeriesId>&includeOnlyOpenItems=<includeOnlyOpenItems>
```

### Http Verb

GET

### Query String paramters
Name | Value  | Description
:----|:-------|:------------
toDate|Date|To date. If null, defaults to DateTime.Now.
contactGroup|string|The Contact Group supplier is part of.
subledgerNumberSeriesId|string (Guid)|The Sub Ledger Number Series the supplier is part of.
includeOnlyOpenItems|boolean|If null or true: include only open items, otherwise; include all items


### Response Content
Type | Array | Description
:----|:------|:------------
DataPage&lt;GoApi.Reporting.Ledger.SupplierBalance&gt;|No|One.Common.Api.DataPage&lt;GoApi.Reporting.Ledger.SupplierBalance&gt;.

### Request Signature
```http
GET /Reporting/SupplierBalance/?toDate=<toDate>&contactGroup=<contactGroup>&subledgerNumberSeriesId=<subledgerNumberSeriesId>&includeOnlyOpenItems=<includeOnlyOpenItems> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "supplierId": number,
        "supplierName": string,
        "supplierCode": number,
        "supplierExternalCode": number,
        "balance": number
    }],
    "count": number,
    "success": boolean
}

```



