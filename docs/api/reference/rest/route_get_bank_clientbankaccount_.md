
GET Bank/ClientBankAccount/
================

Gets a list of client bank accounts filtered by odata query.

### Url
```http
https://api.poweroffice.net/Bank/ClientBankAccount/
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
DataPage&lt;GoApi.Bank.ClientBankAccount&gt;|No|DataPage&lt;ClientBankAccount&gt;.

### Request Signature
```http
GET /Bank/ClientBankAccount/?$filter=<ODataFilter> HTTP/1.1
Authorization: Bearer [Access Key]

```

### Response Signature
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "data": [{
        "id": number,
        "code": string,
        "bicSwift": string,
        "bankName": string,
        "generalLedgerAccountCode": number,
        "countryCode": string,
        "currencyCode": string,
        "hasOutgoingPaymentService": boolean,
        "hasIncomingPaymentService": boolean,
        "isClientTrustAccount": boolean,
        "isCurrentAccount": boolean
    }],
    "count": number,
    "success": boolean
}

```



