
GET ExternallyDeliverableInvoice/
================

Gets all [ExternallyDeliverableInvoice](Type_ExternallyDeliverableInvoice.md) filtered by an odata query.

### Url
```http
https://api.poweroffice.net/ExternallyDeliverableInvoice/
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
DataPage&lt;GoApi.Invoices.ExternallyDeliverableInvoice&gt;|No|Datapage&lt;ExternallyDeliverableInvoice&gt;.

### Request Signature
```http
GET /ExternallyDeliverableInvoice/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": string (Guid),
        "customerCode": number,
        "customerEmail": string,
        "externalInvoiceDeliveryType": ExternalInvoiceDeliveryType,
        "totalAmount": number,
        "invoiceNo": number,
        "invoiceDeliveryDate": Date,
        "invoiceDate": Date,
        "dueDate": Date,
        "createdDate": Date,
        "isDelivered": boolean
    }],
    "count": number,
    "success": boolean
}

```



