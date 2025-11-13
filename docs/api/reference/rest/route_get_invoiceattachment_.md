
GET InvoiceAttachment/
================

Gets a list of [InvoiceAttachment](Type_InvoiceAttachment.md) filtered by odata query.

### Url
```http
https://api.poweroffice.net/InvoiceAttachment/
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
DataPage&lt;GoApi.Invoices.InvoiceAttachment&gt;|No|DataPage&lt;InvoiceAttachment&gt;.

### Request Signature
```http
GET /InvoiceAttachment/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "invoiceId": string (Guid),
        "base64EncodedData": string,
        "fileName": string,
        "fileSizeInBytes": number,
        "lastChanged": Date
    }],
    "count": number,
    "success": boolean
}

```



