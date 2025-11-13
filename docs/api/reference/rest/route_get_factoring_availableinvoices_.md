
GET Factoring/AvailableInvoices/
================

Gets a list of invoices available for the factoring agency filtered by a oData query.

### Url
```http
https://api.poweroffice.net/Factoring/AvailableInvoices/
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
DataPage&lt;GoApi.Factoring.FactoringInvoiceDetails&gt;|No|DataPage&lt;FactoringInvoiceDetails&gt;.

### Request Signature
```http
GET /Factoring/AvailableInvoices/?$filter=<ODataFilter> HTTP/1.1
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
        "totalAmount": number,
        "invoiceNo": number,
        "invoiceDeliveryDate": Date,
        "invoiceDate": Date,
        "dueDate": Date,
        "createdDate": Date,
        "isDelivered": boolean,
        "originalInvoiceNo": number,
        "factoringInvoiceStatus": FactoringInvoiceStatus,
        "factoringInvoiceStatusDescription": string,
        "debtorEmailAddress": string,
        "debtorPhoneNumber": string,
        "projectCode": string,
        "projectName": string,
        "departmentCode": string,
        "departmentName": string
    }],
    "count": number,
    "success": boolean
}

```



